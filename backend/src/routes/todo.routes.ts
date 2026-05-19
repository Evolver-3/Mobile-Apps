import { Router } from "express";
import { createNewTodo, deleteTodo, getTodo ,getTodoByTag,updateTodo, updateTodoStatus} from "../controllers/todo.controller";


const router=Router()

router.route("/newTodo").post(createNewTodo)

router.route("/tag/:tag").get(getTodoByTag)

router.route("/:id").get(getTodo)

router.route("/delete/:id").delete(deleteTodo)

router.route("/update/:id").patch(updateTodo)

router.route("/status/:id").patch(updateTodoStatus)


export default router