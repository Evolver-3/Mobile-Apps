import { View, Text, FlatList, Pressable} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useColorScheme} from 'nativewind'
import { Alltabs } from '@/constants/data'

type AllTypesProps={
  selectedTab:string 
  setSelectTab:(tab:TodoTag)=>void
}

const AllTypes = ({selectedTab,setSelectTab}:AllTypesProps) => {
 
  const {colorScheme}=useColorScheme()

  const bg=colorScheme==="dark"?"#09090b":"#ffffff"

  const transparent =colorScheme==="dark"?"rgba(9,9,11,0)":"rgba(255,255,255,0)"

  const TabsCols=colorScheme === "dark"?"#6B6665":"#E7E7E7"

  const TabsNotCols=colorScheme==="dark"?"#332F2E":"#ffffff"


  return (
    <View className=' relative'>
      <FlatList
      keyExtractor={(item)=>item}
      data={Alltabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={0}
      renderItem={({item})=>(

      <Pressable
      onPress={()=>setSelectTab(item)}
       className='px-4 py-2 rounded-xl m-2 '
       style={{
        backgroundColor:selectedTab ===item? TabsCols:TabsNotCols} }>
          <Text className={`text-sm text-neutral-800 dark:text-neutral-100 ${selectedTab===item?'font-semibold':''}`}
          >{item}</Text>
      </Pressable>
        )}/>

      <LinearGradient
      pointerEvents='none'
      colors={[bg,transparent]}
      start={{x:0,y:0}}
      end={{x:1,y:0}}
      style={{
        position:"absolute",
        left:0,
        top:0,
        bottom:0,
        width:6
      }}/>

      <LinearGradient
      pointerEvents='none'
      colors={[transparent,bg]}
      start={{x:0,y:0}}
      end={{x:1,y:0}}
      style={{
        position:"absolute",
        right:0,
        top:0,
        bottom:0,
        width:6
      }}/>

  
    </View>
  )
}

export default AllTypes