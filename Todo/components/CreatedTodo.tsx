import { View, Text ,FlatList, Pressable,ScrollView} from 'react-native'
import {useState} from 'react'
import { CircleCheck,Circle, ChevronUp, Trash2,} from 'lucide-react-native'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'


type createdTodoProps={
  todo:AllTodos[],
  selectedTab:string,
  changeStatus:(id:string)=>Promise<AllTodos|undefined>,
  deleteSelectedTodo:(id:string)=>Promise<void>
}

const CreatedTodo = ({todo,selectedTab,changeStatus,deleteSelectedTodo}:createdTodoProps) => {

  const filteredData=selectedTab==="All"?todo:todo.filter(
    (item)=>item.tag===selectedTab
  )

  const incompleteTodo=filteredData.filter((item)=>!item.completed)

  const completeTodo=filteredData.filter((item)=>item.completed)

  const [allcompleteTodo,setCompleteTodo]=useState(false)

  const completeData=allcompleteTodo?completeTodo.slice(0,1):completeTodo

  

  return (
    <ScrollView className='flex-1'
    showsVerticalScrollIndicator={false}>
      <FlatList
    data={incompleteTodo}
    keyExtractor={(item)=>item.id}
    scrollEnabled={false}
    renderItem={({item})=>{
    
    const RightActions=()=>(
    <Pressable
    onPress={()=>deleteSelectedTodo(item.id)}>
      <View className='rounded-xl bg-red-200 p-4 m-2 flex-1'>
      <Trash2 size={30}/>

      </View>

    </Pressable>)

      return(
      <ReanimatedSwipeable
      renderRightActions={RightActions}
      >
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
          changeStatus(item.id)}}>

          {item.completed?(
            <CircleCheck size={24}/>):(
              <Circle size={24}/>
            )}

        </Pressable>
      </View>
      </ReanimatedSwipeable>
      )}}/>

     <FlatList
    data={completeData}
    keyExtractor={(item)=>item.id}
    scrollEnabled={false}
    ListHeaderComponent={
      completeTodo.length>0?(
        <View className='flex-row justify-between px-4 mt-4'>
          <Text className='text-white dark:text-neutral-200  text-md'>Done</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-md text-black dark:text-white">{completeTodo.length>1?completeTodo.length:null}</Text>

            <Pressable
            onPress={()=>setCompleteTodo((prev)=>!prev)}
            style={{
                transform:[
                  {rotate:completeTodo?"180deg":"0deg"}
                ]
               }}>
               <ChevronUp size={16}
               
                />
            </Pressable>
          </View>
        </View>
      ):null
    }
    renderItem={({item})=>{
      const RightActions=()=>(
    <Pressable
    onPress={()=>deleteSelectedTodo(item.id)}>
      <View className='rounded-xl bg-red-200 p-4 m-2 flex-1'>
      <Trash2 size={30}/>

      </View>

    </Pressable>)

    return(
      <ReanimatedSwipeable renderRightActions={RightActions}>
        <View className='p-4 rounded-2xl m-2 justify-between flex-row '
      style={{
        backgroundColor:"#D9D2D9" 
      }}>
        <View className="flex-col gap-y-3 ">
 
        <Text className="text-neutral-600 dark:text-neutral-700">{item.title}</Text>
        </View>
        <Pressable
        className='w-10 h-10 items-center justify-center '
        onPress={()=>{
          changeStatus(item.id)}}>

          {item.completed?(
            <CircleCheck size={24}/>):(
              <Circle size={24}/>
            )}

        </Pressable>
      </View>
      </ReanimatedSwipeable>
    )}}/>
    </ScrollView>
  )
}

export default CreatedTodo

