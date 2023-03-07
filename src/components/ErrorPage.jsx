import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = (props) =>{
    return(
        <>
            <h3>Ups! Error</h3>
            <Link to={"/"}>volver a home</Link>
        </>
    )
};

export default ErrorPage;