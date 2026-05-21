import { createTodo ,getTodoByTag,updateTodoStatus} from "@/services/todoServices";
import { useEffect, useState } from "react";


export const useTodos=(selectedTab:string)=>{
  const [todos,setTodos]=useState<AllTodos[]>([])
  const [loading,setLoading]=useState(false)

 const fetchTodos=async()=>{
  try{
    setLoading(true)

    const res=await getTodoByTag(selectedTab)

    console.log(res.data)

    setTodos(res.data)
  }catch(error){
    console.log(error)
  }finally{
    setLoading(false)
  }
 }


 const createNewTodos=async(title:string,colors:string)=>{
  try{
    setLoading(true)

    if(!selectedTab){
      throw new Error("Tag is required")
    }

    const res=await createTodo({title,tag:selectedTab,colors})
    

    return res
  }catch(error){
    console.log(error)
  }finally{
    setLoading(false)
  }
 }

 const changeStatus=async(id:string)=>{
  try{
    setLoading(true)

    const res=await updateTodoStatus(id)
    const updatedTodo=res.data

    setTodos((prev)=>prev.map((todo)=>todo.id===updatedTodo.id?updatedTodo:todo))

    console.log(updatedTodo)
     return res.data

  }catch(error){
    console.log(error)
    throw error
  }finally{
    setLoading(false)
  }

 
 }

  useEffect(()=>{
    if(selectedTab){
      fetchTodos()
    }
  },[selectedTab])

  return{
    todos,
    loading,
    setTodos,
    fetchTodos,
    createNewTodos,
    changeStatus
  }
}