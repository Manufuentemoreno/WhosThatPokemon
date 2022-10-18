import React from "react";
import genOneImg from "../assets/images/charizard-gen-one.png";
import genTwoImg from "../assets/images/lugia-gen-two.png";
import genThreeImg from "../assets/images/kyogre-gen-three.png";
import genFourImg from "../assets/images/palkia-gen-four.png";
import genFiveImg from "../assets/images/tepig-gen-five.png";
import genSixImg from "../assets/images/greninga-gen-six.png";
import genSevenImg from "../assets/images/torracat-gen-seven.png";


const Landing = (props)=>{
    return(
        <section className="landing">
            <h1 className="chooseNumber">Choose how many pokemons do you want:</h1>
            <div className="options-landing">
            <button className="button-choose" onClick={props.select} value={151}>Up to Generation I<img src={genOneImg} className="pokemon-button"/></button>

            <button className="button-choose" onClick={props.select} value={251}>Up to Generation II<img src={genTwoImg} className="pokemon-button"/></button>

            <button className="button-choose" onClick={props.select} value={386}>Up to Generation III<img src={genThreeImg} className="pokemon-button"/></button>

            <button className="button-choose" onClick={props.select} value={493}>Up to Generation IV<img src={genFourImg} className="pokemon-button"/></button>

            <button className="button-choose" onClick={props.select} value={649}>Up to Generation V<img src={genFiveImg} className="pokemon-button"/></button>

            <button className="button-choose" onClick={props.select} value={721}>Up to Generation VI<img src={genSixImg} className="pokemon-button"/></button>

            <button className="button-choose" onClick={props.select} value={809}>Up to Generation VII<img src={genSevenImg} className="pokemon-button"/></button>
            </div>
        </section>
    )
};

export default Landing;