import React from "react";
import quizBack from "./../../assets/images/poke-show.png"

const Pokemon = (props)=>{
    return(
        <section className="pokemon-box">
            <img className="pokemon" src={props.image} style={props.fx} alt=""/>
            <img className='back' src={quizBack} alt="Back" />
        </section>
    )
};

export default Pokemon;