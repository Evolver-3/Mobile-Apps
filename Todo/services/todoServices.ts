import { api } from "./api";

type CreateTodoData={
  title:string 
  tag:string 
  colors:string
}

export const createTodo=async(data:CreateTodoData)=>{
  const res=await api.post("/newTodo",data)
  return res.data
}

export const getTodoByTag=async(tag:string)=>{
  const res=await api.get(`/tag/${tag}`)
  return res.data
}

export const deleteTodo=async(id:string)=>{
  const res=await api.delete(`/delete/${id}`)
  return res.data
}

export const updateTodoStatus=async(id:string,
  completed:boolean
)=>{
  const res=await api.patch(`/status/${id}`,{completed})

  return res.data
}