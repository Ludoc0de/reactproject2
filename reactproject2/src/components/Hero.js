import React from "react"
import heroImage from "./images/logo-black.png"

function Hero(props){
    
    const popHero = {
        opacity: props.emerge ? "1": "0",
        transition: "1s ease-in 0.5s"
    }

    return(
        <section className="hero" style={popHero}>
            <span className="hero--subsection">
                <h1 className="hero--title">Carte de visite digital</h1>
                <p className="hero--text">Créer votre carte digital professionel</p> 
            </span>
            <img className="hero--image" src={heroImage} />
            <ul className="hero--unlist">
                <li className="hero--list">
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="hero--list">
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="hero--list">
                    <a href="#">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </section>
        
    )
}

export default Hero