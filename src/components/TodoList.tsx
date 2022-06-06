import { FunctionComponent, useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoContext } from "./context/context";
import TodoItem from './TodoItem'

interface TodoListProps {
}
 
const TodoList: FunctionComponent<TodoListProps> = () => {
    const {goals} = useContext(TodoContext)
    return (
        <div>
            <TransitionGroup>
                {goals.map((goal) => (
                    <CSSTransition
                        key = {goal.id}    
                        timeout = {500}  
                        classNames = 'goal'  
                    >
                        <TodoItem goal={goal}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
     );
}
 
export default TodoList;