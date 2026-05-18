import { View, Text ,FlatList, Pressable} from 'react-native'
import React from 'react'
import { CheckCircle, CheckCircleIcon,BoxSelectIcon} from 'lucide-react-native'

type createdTodoProps={
  todo:AllTodos[],
  selectedTab:string
}

const CreatedTodo = ({todo,selectedTab}:createdTodoProps) => {

  const filteredData=todo.filter(
    (item)=>item.tag===selectedTab
  )
  return (
    <FlatList
    data={filteredData}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <View className='p-4 rounded-xl m-2'
      style={{
        backgroundColor:item.colors 
      }}>
        <View className="flex-col gap-y-3 ">
        <Text>{item.todo}</Text>
        <Text>{item.date}</Text>
        </View>
        <Pressable>

          {item.completed?(
            <View className='size-6 rounded-full border-neutral-800  dark:border-neutral-200'/>):(
              <BoxSelectIcon size={24}/>
            )}

        </Pressable>
      </View>
    )}
    />
  )
}

export default CreatedTodo