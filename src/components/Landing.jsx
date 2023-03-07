import React from "react";

const Landing = ({play}) =>{

    return(
        <>  
            <h2 className="chooseNumber button-landing">Adivina quién es ese Pokemon!</h2>
            <button type="button" className="option-button" onClick={play}>Jugar</button>
        </>
    )
};

export default Landing;