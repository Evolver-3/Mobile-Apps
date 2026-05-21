import { View, Text ,FlatList, Pressable} from 'react-native'
import React, { useEffect } from 'react'
import { CheckCircle, CheckCircleIcon,BoxSelectIcon} from 'lucide-react-native'


type createdTodoProps={
  todo:AllTodos[],
  selectedTab:string,
  changeStatus:(id:string)=>Promise<AllTodos|undefined>
}

const CreatedTodo = ({todo,selectedTab,changeStatus}:createdTodoProps) => {

  const filteredData=selectedTab==="All"?todo:todo.filter(
    (item)=>item.tag===selectedTab
  )

  return (
    <FlatList
    data={filteredData}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <View className='p-4 rounded-xl m-2 justify-between flex-row'
      style={{
        backgroundColor:item.colors 
      }}>
        <View className="flex-col gap-y-3 ">
 
        <Text>{item.title}</Text>
        </View>
        <Pressable
        className='w-10 h-10 items-center justify-center'
        onPress={()=>{
          changeStatus(item.id)
          console.log(item.completed)
          console.log(item.id)}}>

          {item.completed?(
            <CheckCircle size={24}/>):(
              <BoxSelectIcon size={24}/>
            )}

        </Pressable>
      </View>
    )}
    />
  )
}

export default CreatedTodo