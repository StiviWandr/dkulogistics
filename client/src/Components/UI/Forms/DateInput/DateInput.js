import React from "react";
import "./DateInput.css"
import Calendar from "react-calendar";

import ModalWindow from "../../ModalWindow/ModalWindow";
const DateInput = (props)=>{    
    const normalDate = props.value;

    return (
        <div className="DateInput_group" >
            <input 
                onClick={props.onClick}
                required={props.required}
                // name={props.name} 
                // id ={props.name} 
                readOnly
                value={props.valueToLocaleDateString}
                className = "DateInput" 
                type={props.type? props.type: 'text'} 
                placeholder={props.placeholder? props.placeholder : " "}>
            </input>
            {
                props.showCalendar?
                <ModalWindow
                    modalStatus = {props.showCalendar}
                    bgOnClick= {props.bgOnClick}
                    contentWidth="100%"
                >
                    <Calendar 
                        tileClassName ="normalBorder"
                        value={props.value} 
                        onChange={props.onChangeHandler} 
                    />
                </ModalWindow>
                    
                
                :null
            }
            {props.label? <label htmlFor={props.name} className="DateInput_label">{props.label}</label>: null}
        </div>
    )
}

export default DateInput;