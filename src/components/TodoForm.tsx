import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import MyInput from './UI/MyInput/MyInput'

interface TodoFormProps {
    addTask: (value:string) =>void
}
 
const TodoForm: FunctionComponent<TodoFormProps> = ({addTask}) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleSubmit =(e:ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        addTask(inputValue)
        
    }

    const handleChange =(e:ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <MyInput
                value={inputValue}
                onChange= {handleChange}
                placeholder='Enter a goal and press enter'
            />
        </form>
     );
}
 
export default TodoForm;
