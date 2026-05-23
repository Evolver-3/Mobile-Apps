import { Router } from "express";
import { createNewTodo, deleteTodo,getTodoByTag,updateTodo, updateTodoStatus,getAllTodo} from "../controllers/todo.controller";


const router=Router()

router.route("/newTodo").post(createNewTodo)

router.route("/tag/:tag").get(getTodoByTag)

router.route("/AllTag").get(getAllTodo)


router.route("/delete/:id").delete(deleteTodo)

router.route("/update/:id").patch(updateTodo)

router.route("/status/:id").patch(updateTodoStatus)


export default router