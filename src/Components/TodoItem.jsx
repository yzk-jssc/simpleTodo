import React from "react";
import Mybutton from "./UI/button/myButton";
import Mycheckbox from "./UI/checkbox/myCheckBox";

const Todoitem = ({ goal, handleToggle, removeTask }) => {
    return (
        <div>
            <div className="goal" key={goal.id}>
                <Mycheckbox 
                    handleToggle = {handleToggle}
                />

                <div className="goal__content">{goal.task}</div>

                <Mybutton onClick={() => removeTask(goal.id)} />
            </div>
        </div>
    );
};

export default Todoitem;
