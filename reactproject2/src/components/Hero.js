import React from "react"
// import HeroImg from "../images/DrawKit.png"


function Hero(){
    return(
        <section>
            <span className="hero--subsection">
                <h1 className="hero--title">Carte de visite digital</h1>
                <p className="hero--text">Créer votre carte digital professionel</p> 
                <button>Contact</button>
            </span>
            <div className="hero--image">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* <img className="hero--image" src={HeroImg} /> */}
        </section>
        
    )
}

export default Hero