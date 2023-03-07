import React from "react";

const Landing = ({play}) =>{

    return(
        <>  
            <p>Bienvenido al Juego de Pokemon!</p>
            <button type="button" onClick={play}>Jugar</button>
        </>
    )
};

export default Landing;