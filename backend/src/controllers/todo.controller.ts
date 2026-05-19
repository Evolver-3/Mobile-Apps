import {prisma} from '../prisma'
import asyncHandler from '../utils/asyncHandler'
import ApiError from '../utils/ApiError'
import ApiResponse from '../utils/ApiResponse'

export const createNewTodo=asyncHandler(async(req,res)=>{
  const {title,tag}=req.body

  if(!title){
    throw new ApiError(400, "Title is required")
  }

  const todo=await prisma.todo.create({
    data:{title,tag}
  })

  return res.status(201).json(new ApiResponse(201,todo,"Todo created"))
})