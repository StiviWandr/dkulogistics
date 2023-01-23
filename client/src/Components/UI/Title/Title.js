import React from "react";
import "./Title.css";
const Title = (props) => {
    return(
        <div className="Title">
            {props.children}
        </div>
    )
}
export default Title;