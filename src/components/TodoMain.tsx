import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { idText } from 'typescript';
import { TodoContext } from './context/context';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { goalItem } from './types/types';

interface TodoMainProps {
    
}
 
const TodoMain: FunctionComponent<TodoMainProps> = () => {

    const [goals, setGoals] = useState<goalItem[]>([]);
    const [complete, setComplete] = useState<boolean>(false)
    
    const addGoal = (userInput:string) =>{
        
        if(userInput){

            const newGoal ={
                id:Date.now(),
                task:userInput,
                complete:false
            }
            
            setGoals([newGoal, ...goals])
        }
    }

    const completeGoal =(e:ChangeEvent<HTMLInputElement>, id?:number)=>{

        goals.map(goal=>{
            if(goal.id === id){
                goal.complete = !goal.complete
            }
        console.log(goal);

            return goal

        })
        
    }

    const removeTask =(id:number)=>{
        
        setGoals(goals.filter(goal=>{
            return goal.id !== id
        }))
    }
    
    return (
        <TodoContext.Provider value={{
            goals,
            complete,
            handleToggle:completeGoal,
            removeTask,
        }}>
            <TodoForm addTask={addGoal}/>
            <TodoList/>

        </TodoContext.Provider>
     );
}
 
export default TodoMain;