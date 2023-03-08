import React from "react";

const Landing = ({play}) =>{

    return(
        <div className="landing-box">  
            <h2 className="chooseNumber landing-title">Adivina quién es ese Pokemon!</h2>
            <button type="button" className="option-button" onClick={play}>Jugar</button>
            <p className="chooseNumber landing-text">Elige entre modo <b>maratón</b> para adivinar cada generación o el modo <b>desafío</b>, en donde deberás adivinar el nombre de 5 Pokemons de toda la historia de la serie</p>
        </div>
    )
};

export default Landing;