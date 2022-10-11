import React from "react";

const OptionButton = (props)=>{
    return(
        <button className="option-button"
            onClick={props.click}
            style={props.style}
        >
            {props.name}
        </button>
    );
};

export default OptionButton;