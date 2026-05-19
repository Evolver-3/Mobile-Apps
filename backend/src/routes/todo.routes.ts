import { Router } from "express";
import { createNewTodo } from "../controllers/todo.controller";


const router=Router()

router.route("/newTodo").post(createNewTodo)

export default router