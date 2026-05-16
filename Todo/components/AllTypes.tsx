import { View, Text, FlatList, Pressable} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useColorScheme} from 'nativewind'
import { Alltabs } from '@/constants/data'


const AllTypes = () => {

  const {colorScheme}=useColorScheme()

  const bg=colorScheme==="dark"?"#09090b":"#ffffff"

  const transparent =colorScheme==="dark"?"rgba(9,9,11,0)":"rgba(255,255,255,0)"


  return (
    <View className=' relative'>
      <FlatList
      keyExtractor={(item)=>item}
      data={Alltabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(

      <Pressable
       className='px-4 py-2 rounded-xl bg-neutral-200 active:bg-neutral-300 m-2 dark:bg-neutral-700 dark:active:bg-neutral-800'>
          <Text className='text-md text-neutral-800 dark:text-neutral-100'>{item}</Text>
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