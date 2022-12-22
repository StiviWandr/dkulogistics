import React from "react";

const FormInput = (props)=>{
    return(
        <div className="FormInput__group">
            <input 
                name={props.name}
                value={props.value}
                onChange={props.onChangeHandler} 
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