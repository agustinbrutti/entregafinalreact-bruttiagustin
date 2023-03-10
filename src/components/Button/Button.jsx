import React from "react";
import "./button.css";


function Button (props) {
    return (
        <button onClick={props.onClick} className="btn">{props.children}</button>
    )
}

export default Button;