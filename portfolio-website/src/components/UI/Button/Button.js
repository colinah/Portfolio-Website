import React from 'react';
import classes from './Button.module.css';

const button = (props) => {

    let text = props.children
    if(props.link){
        text = <a href={props.link} rel="noopener noreferrer" target="_blank">{props.children}</a>
    }
    return (
        <button 
            onClick = {props.click}
            className={classes.Button}  
        >{text}</button>
    )
}

export default button