import React from "react";
import './IconCheckbox.css'
 
const IconCheckbox = (props) =>{
   
    return(
        <label className="IconCheckbox__group IconCheckbox__label">
            <input 
                type='checkbox'
                onChange = {props.onChangeHandler}
                id={props.id}
                name={props.inputGroup}
                className="NativeCheckbox"
            />
            <img className="IconCheckbox__icon" src={props.icon} alt='icon'/>
            {props.label}
            <div  aria-hidden='true' className={`IconCheckbox`}>
                <div className={`${props.isCheckedState? "IconCheckbox_active": ""}`}></div>
            </div>
            
            
        </label>
    )
}

export default IconCheckbox;