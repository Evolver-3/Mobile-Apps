import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { tabsSelectColors } from '@/constants/data';
import Animated,{ useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const Size=28
const GAP=10
const CLOSED_WIDTH=Size

const OPEN_WIDTH=250

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
    <View className='items-end '>

      <Animated.View
      style={animatedStyle}
      className="h-8 flex-row items-center overflow-hidden">

        {open ?(
          <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal
          contentContainerClassName='items-center'
            className='flex-row'
            contentContainerStyle={{
              alignItems:"center",
              gap:GAP
            }}>
            {tabsSelectColors.map((item)=>{
              const isSelected=selectedColor.btncolor === item.btncolor
              return(
                <Pressable
                  key={item.btncolor}
                  onPress={()=>handleSelect(item)}
                  className='items-center justify-center rounded-full'
                  style={{
                  width:Size,
                  height:Size,
                  borderWidth:isSelected ? 1:0,
                  borderColor:item.btncolor
                  }}>
                  <View
                  className='rounded-full'
                  style={{
                    width:Size-8,
                    height:Size-8,
                    backgroundColor:item.btncolor,
                    }}/>
                </Pressable>)})}
          </ScrollView>
        ):(
          <Pressable
          onPress={openSelector}
          className='rounded-full'
          style={{
            width:Size,
            height:Size,
            backgroundColor:selectedColor.btncolor
          }}/>
        )}

      </Animated.View>
    </View>
   
  )
}

export default SelectColorTab