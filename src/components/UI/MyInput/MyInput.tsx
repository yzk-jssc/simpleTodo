import { FunctionComponent, InputHTMLAttributes } from "react";
import classes from './MyInput.module.css'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}
 
const MyInput: FunctionComponent<MyInputProps> = (props) => {
    return ( 
        <input type="text" className={classes.myInp} {...props} />
    );
}
 
export default MyInput;
