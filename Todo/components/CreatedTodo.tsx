import { View, Text ,FlatList, Pressable,ScrollView} from 'react-native'
import {useState} from 'react'
import { CircleCheck,Circle, ChevronUp, Trash2,} from 'lucide-react-native'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import {useColorScheme} from 'nativewind'


const CreatedTodo = ({todo,selectedTab,changeStatus,deleteSelectedTodo}:createdTodoProps) => {

  const filteredData=selectedTab==="All"?todo : 
  todo.filter(
    (item)=>item.tag===selectedTab
  )

  const incompleteTodo=filteredData.filter((item)=>!item.completed)

  const completeTodo=filteredData.filter((item)=>item.completed)

  const [allcompleteTodo,setCompleteTodo]=useState(false)

  const completeData=allcompleteTodo?completeTodo.slice(0,1):completeTodo

  const {colorScheme}=useColorScheme()
  const isDark=colorScheme==="dark"

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
      <View className='rounded-xl bg-red-500 p-4 m-2 flex-1'>
      <Trash2 size={30} />

      </View>

    </Pressable>)

      return(
      <ReanimatedSwipeable
      renderRightActions={RightActions}
      >
        <View className='p-4 rounded-2xl m-2 justify-between flex-row '
        style={{
        backgroundColor:isDark?item.darkColor:item.colors}}>
        <View className="flex-col  gap-2">

        <Text className='text-black font-semibold'>{item.title}</Text>

        <View className="flex-row gap-1 ">
          <Text className='text-sm text-neutral-500 '>{item.dueDate?.slice(6,10)}</Text>
          <Text className='text-sm text-neutral-500 '>{item.tag}</Text>
        </View>
        </View>
        <Pressable
        className='w-10 h-10 items-center justify-center'
        onPress={()=>{
          changeStatus(item.id)}}>

          {item.completed?(
            <CircleCheck size={24}/>):(
              <Circle size={24}
              color="#ffffff"
              strokeWidth={1}
              fill={isDark?"#C6C4C3":"#F3F2F2"}/>
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
        <View className='flex-row justify-between px-4 mt-6'>
          <Text className='text-neutral-700 font-sans dark:text-neutral-200 text-sm'>Done</Text>

          <View className="flex-row items-center gap-2">
            <Text className="text-md text-black dark:text-white">{completeTodo.length>1?completeTodo.length:null}</Text>

            <Pressable
            onPress={()=>setCompleteTodo((prev)=>!prev)}
           >
               <ChevronUp size={16}
               color={isDark?"#ffffff":"#0D0D0C"}
              style={{
                transform:[
                  {rotate:completeTodo?"180deg":"0deg"}
                ]
               }}
               
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
        backgroundColor:isDark?"#535150":"#E7E7E7" 
      }}>
       <View className="flex-col gap-2">

        <Text className='text-neutral-500 dark:text-neutral-200 font-semibold'>{item.title}</Text>

        <View className="flex-row gap-1 ">
          <Text className='text-sm text-neutral-500 dark:text-neutral-300'>{item.dueDate?.slice(6,10)}</Text>
          <Text className='text-sm text-neutral-500 dark:text-neutral-300'>{item.tag}</Text>
        </View>
        </View>
        <Pressable
        className='w-10 h-10 items-center justify-center '
        onPress={()=>{
          changeStatus(item.id)}}>

          {item.completed?(
            <CircleCheck size={24} fill={isDark?"#3DC242":"#4AB54E"}
            color={isDark?"#535150":"#E7E7E7"}
            />):(
              <Circle size={24}
              color="transparent" 
              />
            )}

        </Pressable>
      </View>
      </ReanimatedSwipeable>
    )}}/>
    </ScrollView>
  )
}

export default CreatedTodo

