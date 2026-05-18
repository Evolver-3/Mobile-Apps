import { tabsSelectColors } from "@/constants/data"
import { useState } from "react"
import { KeyboardAvoidingView,Modal,Platform ,TextInput,View,Text, Pressable} from "react-native"
import SelectColorTab from "./SelectColorTab"
import DateSelect from "./DateSelect"

const NewTodo = ({isOpen,onClose,selectedTab,todo,setTodo}:newTodoProps) => {

  const [title,setTitle]=useState("")
  //colortab
  const [selectedColor,setSelectedColor]=useState(tabsSelectColors[0])

  //creating a new Todo
  const handleSubmit=()=>{
    if(!title.trim())return 

    const newTodo:AllTodos={
      id:Date.now().toString(),
      todo:title,
      date:Date.now(),
      tag:selectedTab,
      completed:false,
      colors:selectedColor.bgColor
    }

    setTodo((prev:AllTodos[])=>[...prev,newTodo])

    setTitle("")
    onClose()
  }

  return (
    <Modal
    visible={isOpen}
    transparent
    animationType="slide"
    onRequestClose={onClose}>

      <KeyboardAvoidingView
      behavior={Platform.OS==="ios"?"padding":"height"} 
      className="flex-1">

        {selectedColor &&(
          <Pressable
          onPress={onClose}
          className="flex-1 justify-end bg-white/50 dark:bg-white/10">

          <Pressable
          onPress={(e)=>e.stopPropagation()}
          className="rounded-t-3xl p-5"
          style={{
            backgroundColor:selectedColor.bgColor
          }}>

           <View className="flex-col ">
             <TextInput
              placeholder="Enter Todo"
              value={title}
              onChangeText={setTitle}
              placeholderTextColor={selectedColor.textColor}
              autoFocus
              textAlignVertical="top"
              multiline
              numberOfLines={5}
              className="rounded-2xl h-30 py-6 text-lg"
              style={{
              color:selectedColor.textColor}}/>
              
            <View className="flex-row mt-4 items-center justify-between">

            <View className="flex-row  gap-x-6 flex-1">
              <DateSelect/>
            <SelectColorTab
             selectedColor={selectedColor}
             onSelectColor={setSelectedColor}/>
            </View>

             <Pressable className=" rounded-full items-center justify-center p-3 "
             style={{
              backgroundColor:selectedColor.btnColor
             }}
             onPress={handleSubmit}>
              <Text className="text-md font-semibold">Done</Text>
              </Pressable>
           </View>
           </View>
          </Pressable>
        </Pressable>)}
      </KeyboardAvoidingView>
    </Modal>
   
  )
}

export default NewTodo