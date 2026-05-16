import React from "react";


declare global{

  interface newTodoProps{
    isOpen:boolean;
    onClose:()=>void
  }

  interface AllTodos{
    id:string;
    todo:string;
    date:string;
  }

  interface AllColors{
    color:string;
    bgColor:string;
    textColor:string;
    btnColor:string
  }
  
}
export {}