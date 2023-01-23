import React from "react";
import "./Text.css";
const Text = (props) => {
    return(
        <div className="Text">
            {props.children}
        </div>
    )
}
export default Text;