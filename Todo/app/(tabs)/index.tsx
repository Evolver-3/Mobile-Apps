import { View, Text, Pressable } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EllipsisVertical} from 'lucide-react-native'
import ThemeToggle from '@/components/ThemeToggle'
import {useColorScheme} from 'nativewind'
import AllTypes from '@/components/AllTypes'

const index = () => {

  const [openSideTab,setOpenSideTab]=useState(false)

  const {colorScheme}=useColorScheme()
  const isDark=colorScheme==="dark"

  return (
    <SafeAreaView className='flex-1 bg-white dark:bg-neutral-950 p-2'>
      <View className='  gap-y-4'>
        <View className='flex-row justify-between items-center pl-2'>
          <Text className="text-2xl font-semibold text-black dark:text-white">To-dos</Text>

          <Pressable
          onPress={()=>setOpenSideTab((prev)=>!prev)}
          className='w-10 h-10 rounded-full items-center justify-center bg-white dark:bg-neutral-950  active:bg-neutral-300  '>
            <EllipsisVertical size={20} color={isDark ? "#f4f4f5":"#27272a"}  strokeWidth={2.5}
            
            />
          </Pressable>

          {openSideTab && (
            <View
            className='absolute right-0 top-10 w-40 rounded-lg bg-white shadow-lg border border-zinc-200 z-50 dark:bg-neutral-800 dark:border-zinc-700'>

              <Pressable
              className='px-4 py-3'>
                <ThemeToggle/>

              </Pressable>
            </View>

          )}

        </View>

        <AllTypes/>

      </View>
    </SafeAreaView>
  )
}

export default index