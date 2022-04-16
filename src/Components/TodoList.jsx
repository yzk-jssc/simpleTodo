import React from "react";
import Todoitem from "./TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todolist = ({ goals, handleToggle, removeTask }) => {
    
    return (
        <div>
            <TransitionGroup>
                {goals.map((goal) => (
                    <CSSTransition
                        key = {goal.id}    
                        timeout = {500}  
                        classNames = 'goal'  
                    >
                        <Todoitem
                            goal={goal}
                            handleToggle={handleToggle}
                            removeTask={removeTask}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Todolist;
