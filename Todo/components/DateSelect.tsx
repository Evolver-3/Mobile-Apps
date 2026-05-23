import { View, Text, Pressable, Platform } from 'react-native'
import React, {useState} from 'react'
import { Calendar, Calendar1Icon, CalendarSearchIcon } from 'lucide-react-native'
import DateTimePicker from '@react-native-community/datetimepicker'


const DateSelect = ({dueDate,setDueDate}:DateSelectProps) => {

  const [pickedDate,setPickedDate]=useState(false)
  return (
    <View> 
      <Pressable
      onPress={()=>setPickedDate(true)}
      className=' rounded-xl'
      >
        <Calendar1Icon size={20} />
      </Pressable>

      {pickedDate && (
        <DateTimePicker
        value={dueDate ?? new Date()}
        mode="date"
        display={Platform.OS ==="ios"? "spinner":"default"}
        onChange={(event, pickedDate)=>{
          if(Platform.OS!=="ios"){
            setPickedDate(false)
          }
          if(pickedDate){
            setDueDate(pickedDate)
          }
        }} />
        
      )}
      
    </View>
  )
}

export default DateSelect  