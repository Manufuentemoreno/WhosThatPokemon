import React from "react";

const Footer = ()=>{
    return(
        <footer className="footer">
            <section className="footer-title">
                <p className="footer-text" style={{fontWeight: 300}}>Designed and developed by Manu Fuente Moreno</p>
            </section>
            <section className="footer-data">
                <p className="footer-text">Created with React JS</p>
                <p className="footer-text">Using the <a target="_blank" href="https://pokeapi.co/">PokeApi</a></p>
            </section>
            <section className="footer-data">
                <a target="_blank" href="https://github.com/Manufuentemoreno"><p className="footer-text">GitHub</p></a>
                <a target="_blank" href="https://www.linkedin.com/in/manuel-fuente-moreno/"><p className="footer-text">LinkedIn</p></a>
            </section>
        </footer>
    )
};

export default Footer;