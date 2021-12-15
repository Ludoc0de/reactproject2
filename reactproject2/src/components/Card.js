import React from "react";

function Card(props) {
    return(
         <div>
            <img src="" className="card--img"/>
            <h2 className="card--title"> {props.title} </h2>
            <h3>{props.description}</h3>
            <p>{props.website}</p>
            <div className="card--buttons">
                <button className="email" type="button">Email</button>
                <button className="phone" type="button">Phone</button>
            </div>
            <h4>Compétences</h4>
            <ul>
                <li>{props.firstSkill}</li>
                <li>{props.secondSkill}</li>
                <li>{props.thirdSkill}</li>
                <li>{props.fourthSkill}</li>
            </ul>  
        </div>
    )
}

export default Card