import React from "react";
import { Link } from "react-router-dom";
import pikachuGif from "../assets/images/pikachu.gif";

const ErrorPage = (props) =>{
    return(
        <main className='main-body'>
            <h3>Página no encontrada</h3>
            <img src={pikachuGif} alt="pikachu" />
            <Link to={"/"}><button type="button">Volver a la Home</button></Link>
        </main>
    )
};

export default ErrorPage;