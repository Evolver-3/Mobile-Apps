import {prisma} from '../prisma'
import asyncHandler from '../utils/asyncHandler'
import ApiError from '../utils/ApiError'
import ApiResponse from '../utils/ApiResponse'

export const createNewTodo=asyncHandler(async(req,res)=>{
  const {title,tag,colors}=req.body

  if(!title?.trim()){
    throw new ApiError(400, "Title is required")
  }

  const todo=await prisma.todo.create({
    data:{title,tag,colors}
  })

  return res.status(201).json(new ApiResponse(201,todo,"Todo created"))
})


export const getTodo=asyncHandler(async(req,res)=>{
  const {id}=req.params

  if(!id){
    throw new ApiError(400, "id is required")
  }
    const todo=await prisma.todo.findUnique({
      where:{
        id
      }
    })

    if(!todo){
      throw new ApiError(404,"Todo not found")
    }

    return res.status(200).json(new ApiResponse(200,todo,"Get todo by Id"))
})

export const deleteTodo=asyncHandler(async(req,res)=>{

  const {id}=req.params

  if(!id){
    throw new ApiError(400, "id is required")
  }

  const todo=await prisma.todo.delete({
    where:{
      id,
    }
  })

  return res.status(200).json(new ApiResponse(200,todo,"Todo deleted"))
})

export const getTodoByTag=asyncHandler(async(req,res)=>{

  const {tag}=req.params

  if(!tag){
    throw new ApiError(402,"Tag is required")
  }

  const todo=await prisma.todo.findMany({
    where:{
      tag
    }
  })

  if(!todo){
    throw new ApiError(404,"No todo for this particular exist")
  }

  return res.status(200).json(new ApiResponse(200, todo, "Todo according to the tag"))
})

export const updateTodo=asyncHandler(async(req,res)=>{
  const {id}=req.params
  const {title,colors}=req.body

  if(!id){
    throw new ApiError(400,"Id is required")
  }

  if(!title?.trim()){
    throw new ApiError(400,"Title is required")
  }

  if(!colors?.trim()){
    throw new ApiError(400,"Colors is required")
  }

  const updatedTodo=await prisma.todo.update({
    where:{
      id,
    },
    data:{
      title,
      colors
    }
  })

  return res.status(200).json(
    new ApiResponse(200,updatedTodo,"Todo updated")
  )

})

export const updateTodoStatus=asyncHandler(async(req,res)=>{
  const {id}=req.params

  const todo=await prisma.todo.findUnique({
    where:{
      id
    }
  })

  if(!todo){
    throw new ApiError(404,"Todo not found")
  }

  const updatedTodo=await prisma.todo.update({
    where:{
      id
    },
    data:{
      completed:!todo.completed
    }
  })

  if(!updatedTodo){
    throw new ApiError(404,"Error exist when changing todo status")
  } 

  return res.status(200).json(new ApiResponse(200,updatedTodo,"Todo status changed"))
})