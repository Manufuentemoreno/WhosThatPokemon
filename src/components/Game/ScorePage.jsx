import React from "react";
import { NavLink } from "react-router-dom";

const ScorePage = ({win, lose, gameMode})=>{
    return(
        <>
            <h1 className="chooseNumber landing-title">PARTIDA TERMINADA</h1>
            <section className="score-data">
                <h2 style={{"align-self": "center"}}>{gameMode === 1 ? "Desafío" : "Maratón"}</h2>
                <p>Adivinaste { win } pokemons</p>
                <p>No conocías a { lose } pokemons</p>
                <p>Efectividad: { win / 0.05 }%</p>
            </section>
            <NavLink to="/"><button type="button" className="option-button" style={{"margin-bottom": 60}}>Jugar Otro</button></NavLink>
        </>
    );
};

export default ScorePage;