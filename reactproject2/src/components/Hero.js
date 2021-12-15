import React from "react"
import HeroImg from "../images/DrawKit.png"


function Hero(){
    return(
        <section>
            <span className="hero--subsection">
                <h1 className="hero--title">Carte de visite digital</h1>
                <p className="hero--text">Création de votre carte professionel</p>  
            </span>
            <img className="hero--image" src={HeroImg} />
        </section>
        
    )
}

export default Hero