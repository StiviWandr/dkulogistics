import React from "react";

const Input = (props) => {
    return(
        <div className="LoginForm--form-group">
            <input className = "LoginForm--form-input"
                name={props.name}
                onBlur={props.onBlur} 
                onChange={props.onChange} 
                value={props.value}
                type={props.type?props.type:"text"} placeholder={props.placeholder?props.placeholder:" "}
            />
            <label className="LoginForm--form-label">Email</label>
            {/* <div className="LoginForm--form-input_error"></div> */}
        </div>
    )
}

export default Input;