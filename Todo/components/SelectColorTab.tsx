import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { tabsSelectColors } from '@/constants/data';
import Animated,{ useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


type colorSelectorProps={
  selectedColor:AllColors;
  onSelectColor:(color:AllColors)=>void 
}

const DOT_SIZE=28
const GAP=12
const CLOSED_WIDTH=DOT_SIZE
const OPEN_WIDTH=tabsSelectColors.length * DOT_SIZE + (tabsSelectColors.length -1) *GAP

const SelectColorTab = ({selectedColor,onSelectColor}:colorSelectorProps) => {

  const [open,setOpen]=useState(false)

  const width=useSharedValue(CLOSED_WIDTH)

  const animatedStyle=useAnimatedStyle(()=>({
    width:width.value
  }))

  const openSelector=()=>{
    setOpen(true)
    width.value=withTiming(OPEN_WIDTH, {duration:250})
  }

  const closeSelector=()=>{
    width.value=withTiming(CLOSED_WIDTH, {duration:250})
    setTimeout(() => {
      setOpen(false)  
    }, 250);
  }

  const handleSelect=(color:AllColors)=>{
    onSelectColor(color)
    closeSelector()
  }

  return (
    <View className='items-end overflow-hidden'>

      <Animated.View
      style={animatedStyle}
      className="h-8 flex-row items-center overflow-hidden">

        {open ?(
          <View
            className='flex-row items-center'
            style={{
            gap:GAP
            }}>
            {tabsSelectColors.map((item)=>{
              const isSelected=selectedColor.color=== item.color
              return(
                <Pressable
                  key={item.color}
                  onPress={()=>handleSelect(item)}
                  className='items-center justify-center rounded-full'
                  style={{
                  width:DOT_SIZE,
                  height:DOT_SIZE,
                  borderWidth:isSelected ? 2:0,
                  borderColor:"#171717"
                  }}>
                  <View
                  className='rounded-full'
                  style={{
                    width:DOT_SIZE-8,
                    height:DOT_SIZE-8,
                    backgroundColor:item.color,
                    }}/>
                </Pressable>)})}
          </View>
        ):(
          <Pressable
          onPress={openSelector}
          className='rounded-full'
          style={{
            width:DOT_SIZE,
            height:DOT_SIZE,
            backgroundColor:selectedColor.color
          }}/>
        )}

      </Animated.View>
    </View>
   
  )
}

export default SelectColorTab