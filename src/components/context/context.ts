import { createContext } from "react";
import { TodoState } from "../types/types";

const defaultTodoState: TodoState = {
    goals: [],
    handleToggle:()=>{},
    removeTask:()=>{},
    completedGoals:[],
}


export const TodoContext = createContext(defaultTodoState) 

