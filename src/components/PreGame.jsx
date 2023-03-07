import React, {useState} from "react";
import { Navigate } from "react-router-dom";

import SelectGen from "./SelectGen";
import Game from "./Game/Game";


const PreGame = ({gameMode})=>{
    const [ pokemonNumber, setPokemonNumber ] = useState(false);

    const text = {
        languaje: "español",
        title: "Adivina quién es ese Pokemon",
        choose: "Elige cuántos pokemons quieres:",
        gen: "Hasta la generación ",
        finishGame: "Finalizar Juego",
        footerDesign: "Diseñado y desarrollado por Manu Fuente Moreno",
        footerReact: "Creado con React JS",
        footerApi: "Utilizando la"
      }


    const configPokemonNumber = (event)=>{  
        setPokemonNumber(event.currentTarget.value); 
    }

    return(
        <>
            { !pokemonNumber ?
                <SelectGen select={configPokemonNumber} texts={text}/>
            :
                <Game gameMode={gameMode} PokemonNumber={pokemonNumber}/>
            }
        </>
    )
};

export default PreGame;