import React from "react";
import win from "../../assets/images/score-master-pokeball.png";
import loose from "../../assets/images/score-pokeball-broken.png";

import {Link} from "react-router-dom";

const Score = (props)=>{
    return(
        <>
        <section className="score-section">
            <div className="score">
                <img src={win} alt="winning" className="score-pokeball"/>
                <p className="score-number score-win">{props.score[0]}</p>
            </div>
            <div className="score">
                <img src={loose} alt="loosing" className="score-pokeball"/>
                <p className="score-number">{props.score[1]}</p>
            </div>
        </section>
            <Link to={"/"}><button className="end-game" onClick={props.action}>{props.text.finishGame}</button></Link>
        </>
    )
};

export default Score;