import React from "react";


declare global{

  interface newTodoProps{
    isOpen:boolean;
    onClose:()=>void;
    selectedTab:string;
    todo:array
    setTodo:(array)=>void
  }

  type TodoTag =
  | "All"
  | "In progress"
  | "Overdue"
  | "Today"
  | "Next 7 days"
  | "High priority"



  interface AllColors{
    btncolor:string;
    colors:string;
    darkColor:string;
  }

  type AllTodos = {
  id: string;
  title: string;
  tag: string;
  colors:string;
  darkColor:string;
  completed: boolean;
  dueDate?:string|null;
};


type createdTodoProps={
  todo:AllTodos[],
  selectedTab:string,
  changeStatus:(id:string)=>Promise<AllTodos|undefined>,
  deleteSelectedTodo:(id:string)=>Promise<void>
}

type colorSelectorProps={
  selectedColor:AllColors;
  onSelectColor:(color:AllColors)=>void 
}

type DateSelectProps={
  dueDate:Date|null;
  setDueDate:(date:Date |null)=>void
}
  
}
export {}