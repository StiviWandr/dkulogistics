import React from "react";
import "./FormCommentInput.css"
const FormCommentInput = (props)=>{
    return (
        <div className="FormCommentInput_group">
            <textarea 
                name={props.name} 
                id ={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                className = "FormCommentInput" 
                type={props.type? props.type: 'textarea'} 
                placeholder={props.placeholder? props.placeholder : " "}
            >

            </textarea>
            {props.label? <label htmlFor={props.name} className="FormCommentInput_label">{props.label}</label>: null}
        </div>
    )
}

export default FormCommentInput;