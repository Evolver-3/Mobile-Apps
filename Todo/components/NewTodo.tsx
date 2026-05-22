import { tabsSelectColors } from "@/constants/data"
import { useState } from "react"
import { KeyboardAvoidingView,Modal,Platform ,TextInput,View,Text, Pressable} from "react-native"
import SelectColorTab from "./SelectColorTab"
import DateSelect from "./DateSelect"
import { useTodos } from "@/hooks/useTodos"

const NewTodo = ({isOpen,onClose,selectedTab,todo,setTodo}:newTodoProps) => {

  const {createNewTodos}=useTodos(selectedTab)

  const [title,setTitle]=useState("")
  //colortab
  const [selectedColor,setSelectedColor]=useState(tabsSelectColors[0])

  //creating a new Todo
  const handleSubmit=async()=>{
    if(!title.trim())return 

    console.log(title)

    try{
      const response =await createNewTodos(
      title,
      selectedColor.bgColor
      )
      console.log(response)

      setTodo((prev:AllTodos[])=>[
        response.data,
        ...prev
      ])
      setTitle("")
      onClose()

    }catch(error){
      console.log(error)
    }
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
              autoFocus
              textAlignVertical="top"
              multiline
              numberOfLines={5}
              className="rounded-2xl h-30 py-6 text-lg text-white  placeholder:text-neutral-300"
              />
              
            <View className="flex-row mt-4 items-center justify-between">

            <View className="flex-row  gap-x-6 flex-1">
              <DateSelect/>
            <SelectColorTab
             selectedColor={selectedColor}
             onSelectColor={setSelectedColor}/>
            </View>

             <Pressable className=" rounded-full items-center justify-center p-3 bg-slate-100 dark:bg-neutral-400"
             
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