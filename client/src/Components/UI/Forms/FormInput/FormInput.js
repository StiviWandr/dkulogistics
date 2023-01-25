import React from "react";
import "./FormInput.css"
const FormInput = (props)=>{
    return(
        <div className="FormInput__group">
            <input 
                required={props.required}
                name={props.name}
                value={props.value}
                onChange={props.onChange} 
                onBlur={props.onBlurHandler} 
                className = "FormInput" 
                type={props.type? props.type : "text"} placeholder={props.placeholder ? props.placeholder : " "}
            />
            {props.label ? <label className="FormInput__label">{props.label}</label> : null}
            <div className="success_icon"></div>
        </div>
    )
}

export default FormInput;