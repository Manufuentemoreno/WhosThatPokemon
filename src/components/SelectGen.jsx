import React from "react";
import genOneImg from "../assets/images/charizard-gen-one.png";
import genTwoImg from "../assets/images/lugia-gen-two.png";
import genThreeImg from "../assets/images/kyogre-gen-three.png";
import genFourImg from "../assets/images/palkia-gen-four.png";
import genFiveImg from "../assets/images/tepig-gen-five.png";
import genSixImg from "../assets/images/greninga-gen-six.png";
import genSevenImg from "../assets/images/torracat-gen-seven.png";


const SelectGen = ({select, texts})=>{
    return(
        <>
        <h2 className="chooseNumber">{texts.title}</h2>
        <section className="landing">
            <h1 className="chooseNumber">{texts.choose}</h1>
            <div className="options-landing">
            <button className="button-choose" onClick={select} value={151}>{texts.gen}I<img src={genOneImg} className="pokemon-button" alt="Generation I"/></button>

            <button className="button-choose" onClick={select} value={251}>{texts.gen}II<img src={genTwoImg} className="pokemon-button" alt="Generation II"/></button>

            <button className="button-choose" onClick={select} value={386}>{texts.gen}III<img src={genThreeImg} className="pokemon-button" alt="Generation III"/></button>

            <button className="button-choose" onClick={select} value={493}>{texts.gen}IV<img src={genFourImg} className="pokemon-button" alt="Generation IV"/></button>

            <button className="button-choose" onClick={select} value={649}>{texts.gen}V<img src={genFiveImg} className="pokemon-button" alt="Generation V"/></button>

            <button className="button-choose" onClick={select} value={721}>{texts.gen}VI<img src={genSixImg} className="pokemon-button" alt="Generation VI"/></button>

            <button className="button-choose" onClick={select} value={809}>{texts.gen}VII<img src={genSevenImg} className="pokemon-button" alt="Generation VII"/></button>
            </div>
        </section>
        </>
    )
};

export default SelectGen;