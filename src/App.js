import React, {useState } from 'react';
import "./Styles/App.css";
import TodoForm from './Components/TodoForm';
import Todolist from './Components/TodoList';


function App() {

    

    const [goals, setGoals] = useState([

    ])

    const addTask = (inputValue)=>{

        if(inputValue){
            const newItem ={
                id: Date.now(),
                task: inputValue,
                complete: false,
            }
            setGoals([newItem,...goals])

            
        }


    }

    const removeTask = (id)=>{
        setGoals(goals.filter((goal)=> {
            return goal.id !== id
        }))

    }

    const handleToggle = (event)=>{
        console.log(event)
        

        //запомнить выполенение в локейл компейр и все 
    }

    return (
    <div className='todo'>
        <h1 className='todo__title'>Simple Todo App</h1>

        
        <TodoForm addTask={addTask}/>
        <Todolist
            goals={goals}
            handleToggle={handleToggle}
            removeTask={removeTask}
        />
        
    </div>
    );
}

export default App;
