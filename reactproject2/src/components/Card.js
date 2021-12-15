import React from "react";

function Card(props) {
    return(
         <div>
            <img src="" className="card--img"/>
            <h2 className="card--title"> {props.title} </h2>
            <h3>{props.description}</h3>
            <p>{props.website}</p>
            <div className="card--buttons">
                <button className="email" type="button" onClick="">Email</button>
                <button className="phone" type="button" onClick="">Phone</button>
            </div>
            <h4>A propos</h4>
            <ul>
                <li>{props.about.first}</li>
                <li>{props.about.second}</li>
            </ul>
            <h4>Compétences</h4>
            <ul>
                <li>{props.skill.first}</li>
                <li>{props.skill.second}</li>
            </ul>  
        </div>
    )
}

export default Card