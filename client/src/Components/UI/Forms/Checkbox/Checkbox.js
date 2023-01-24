import React from "react";
import './Checkbox.css'
 
const Checkbox = (props) =>{
   
    return(
        <label className="Checkbox__group Checkbox__label">
            <input 
                type='checkbox'
                className="NativeCheckbox"
                onChange = {props.onChangeHandler}
                id={props.id}
                name={props.inputGroup}
            />
            <div aria-hidden='true' className={`checkbox`}>
                <div className={`${props.isCheckedState? "checkbox_active": ""}`}></div>
            </div>
            {props.label}
            
        </label>
    )
}

export default Checkbox;