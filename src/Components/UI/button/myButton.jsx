import React from 'react';
import classes from './myButton.module.css'

const Mybutton = ({children,...props}) => {
    return (
        <div {...props} className={classes.closeModal}>
            {children}
        </div>
    );
}

export default Mybutton;
