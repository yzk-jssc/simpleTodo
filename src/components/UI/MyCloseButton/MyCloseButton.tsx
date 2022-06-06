import React, {  FunctionComponent } from 'react'
import  classes from './MyCloseButton.module.css'

interface MyButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    
}
 
const MyCloseButton: FunctionComponent<MyButtonProps> = (props) => {
    return ( 
        <button className={classes.closeModal} {...props}>
            
        </button>
    );
}
 
export default MyCloseButton;
