import React from "react";


declare global{

  interface newTodoProps{
    isOpen:boolean;
    onClose:()=>void;
    selectedTab:string;
    todo:array
    setTodo:(array)=>void
  }

  type TodoTag =string
  | "In progress"
  | "Overdue"
  | "Today"
  | "Next 7 days"
  | "High priority"



  interface AllColors{
    color:string;
    bgColor:string;
    textColor:string;
    btnColor:string
  }

  type AllTodos = {
  id: string;
  title: string;
  tag: string;
  colors: string;
  completed: boolean;
};
  
}
export {}