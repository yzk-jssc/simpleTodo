import React from 'react';
import classes from './MyInput.module.css'

const Myinput = (props) => {
    return (
        <input type="text" className={classes.myInp} {...props} />
    );
}

export default Myinput;
