import React from "react";
import Flag from 'react-world-flags'

const Languaje = (props)=>{
    return(
        <div className="languaje">
            <button onClick={props.english}><Flag code="USA" />English</button>
            <button onClick={props.spanish}><Flag code="ARG" />Español</button>
        </div>
    )
};

export default Languaje;