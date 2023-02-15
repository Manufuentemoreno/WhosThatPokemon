import React from "react";

import Landing from "./Landing";
import Game from "./Game";

const Marathon = (props)=>{

    
    return(
        <>
        { !props.started ? 
            <Landing select={configPokemonNumber} texts={languaje}/> : 
            <Game PokemonNumber={pokemonNumber} end={endGame} texts={languaje}/>
        }
        </>
    )
};

export default Marathon;


started : gameHasStarted