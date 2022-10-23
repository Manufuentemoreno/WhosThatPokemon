import React from "react";
import Flag from 'react-world-flags'

const Languaje = (props)=>{
    return(
        <div className="languaje">
            <button onClick={props.english} style={
                props.languaje.languaje === "español" ? {opacity: 0.5} : null }><Flag code="USA" /><p>English</p></button>
            <button onClick={props.spanish}  style={
                props.languaje.languaje === "english" ? {opacity: 0.5} : null }><Flag code="ARG" /><p>Español</p></button>
        </div>
    )
};

export default Languaje;