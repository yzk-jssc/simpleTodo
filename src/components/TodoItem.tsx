import { FunctionComponent, useContext } from "react";
import { TodoContext } from "./context/context";
import { goalItem } from "./types/types";
import MyCloseButton from "./UI/MyCloseButton/MyCloseButton";

interface TodoItemProps {
    goal: goalItem
}
 
const TodoItem: FunctionComponent<TodoItemProps> = ({goal}) => {
    const {handleToggle,removeTask}= useContext(TodoContext)

    return (
        <div key={goal.id} className='goal'>
            <input type="checkbox"  onChange={e=>handleToggle(e,goal.id)}/>
            <div className="goal__content">{goal.task}</div>
            <MyCloseButton onClick={()=>removeTask(goal.id)}/>
        </div>
     );
}
 
export default TodoItem;