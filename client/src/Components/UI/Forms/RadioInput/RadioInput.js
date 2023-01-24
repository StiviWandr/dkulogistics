import React from "react";
import './RadioInput.css'

const RadioInput = (props) =>{
    return(
        <label className="RadioInput__group RadioInput__label">
            <input 
                required={props.required}
                className="RadioInput"
                type="radio"
                name={props.radioGroup}
                onChange={props.onChangeHandler}
            />
            <div className="RadioInput__circle">
                <div className={`${props.isCheckedState? "circle_active": ""}`}></div>
            </div>
            {props.label}
        </label>
    )
}

export default RadioInput;