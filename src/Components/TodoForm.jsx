import React, { useState } from "react";
import Myinput from "./UI/myInput/MyInput";

const TodoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }

    const handleSumbit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <Myinput 
                key = {userInput.value}
                value={userInput} 
                onChange = {handleChange}
                placeholder="Enter a goal"
                />
            </form>
        </div>
    );
};

export default TodoForm;
