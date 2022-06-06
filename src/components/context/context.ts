import { createContext } from "react";
import { TodoState } from "../types/types";

const defaultTodoState: TodoState = {
    goals: [],
    complete:false,
    handleToggle:()=>{},
    removeTask:()=>{},
}


export const TodoContext = createContext(defaultTodoState) 

