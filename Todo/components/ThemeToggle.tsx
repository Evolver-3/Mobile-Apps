import { Pressable } from 'react-native'
import {useColorScheme} from 'nativewind'
import React from 'react'
import { MoonStar, Sun, SunMediumIcon } from 'lucide-react-native'

const ThemeToggle = () => {
  const {colorScheme,toggleColorScheme}=useColorScheme()

  const isDark=colorScheme==="dark"
  return (
    <Pressable
    onPress={toggleColorScheme}
    className='h-6 w-6 items-center justify-center rounded-full '
    >
      {isDark? (
        <SunMediumIcon size={20} color="yellow"/>):(
          <MoonStar size={20} color="black"/>
        )}
    </Pressable>    
  )
}

export default ThemeToggle