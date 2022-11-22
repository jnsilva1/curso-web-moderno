import React from "react";
import './Button.css'

const Button = props => {
    let classes = ['button']
    if(props.operation) classes.push('operation')
    if(props.double) classes.push('double')
    if(props.triple) classes.push('triple')
    return (
        <button 
            onClick={e=> props.click && props.click(props.label)}
            className={`${classes.join(' ')}`}>
            {props.label}
        </button>
    )
}


export default Button