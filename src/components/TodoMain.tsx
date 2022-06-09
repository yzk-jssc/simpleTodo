import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { TodoContext } from './context/context';
import TodoForm from './items/TodoForm';
import TodoList from './items/TodoList';
import { goalItem } from './types/types';

interface TodoMainProps {
    
}
 
const TodoMain: FunctionComponent<TodoMainProps> = () => {

    const [goals, setGoals] = useState<goalItem[]>([]);
    const [completedGoals, setCompletedGoals] = useState<goalItem[]>([])

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
            
        })

        setCompletedGoals(goals.filter(goal=>goal.complete))
        
    }

    const removeTask =(id:number)=>{
        
        setGoals(goals.filter(goal=>{
            return goal.id !== id
        }))
    }
    
    return (
        <TodoContext.Provider value={{
            goals,
            handleToggle:completeGoal,
            removeTask,
            completedGoals,
        }}>
            <TodoForm addTask={addGoal}/>
            <TodoList/>

        </TodoContext.Provider>
     );
}
 
export default TodoMain;