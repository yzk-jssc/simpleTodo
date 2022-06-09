import { FunctionComponent, useContext, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoContext } from "../context/context";
import TodoItem from './TodoItem'

interface TodoListProps {
}
 
const TodoList: FunctionComponent<TodoListProps> = () => {
    const {goals} = useContext(TodoContext);
    const [allGoals, setallGoals] = useState<boolean>(true)
    const completedGoals = goals.filter(goal=>goal.complete)
    console.log(completedGoals);
    

    return (
        <div className="goal__list">
            {allGoals
            ?(<TransitionGroup>
                {goals.map((goal) => (
                    <CSSTransition
                        key = {goal.id}    
                        timeout = {500}  
                        classNames = 'goal'  
                    >
                        <TodoItem goal={goal}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>)

            :(<TransitionGroup>
            {completedGoals.map((goal) => (
                <CSSTransition
                    key = {goal.id}    
                    timeout = {500}  
                    classNames = 'goal'  
                >
                    <TodoItem goal={goal}/>
                </CSSTransition>
            ))}
            </TransitionGroup>)
        }
        <div className="goal__buttons">
            <button className="goal_button" onClick={()=>setallGoals(true)}>ALL</button>
            <button className="goal_button" onClick={()=>setallGoals(false)}>COMPLETED</button>

        </div>
        </div>
     );
}
 
export default TodoList;