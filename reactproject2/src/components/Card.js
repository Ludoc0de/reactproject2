import React from "react";

function Card(props) {
    
    let test = props.image
    
    return(
        <div className="card--subsection" style={{opacity:1}}>
            
            <img src="" className="card--img" />

            <h2 className="card--title" name="test"> {props.title} </h2>
            <h3>{props.description}</h3>
            <p>{props.website}</p>
            {/* <div className="card--buttons">
                <button className="email" type="button">Email</button>
                <button className="phone" type="button">Phone</button>
            </div> */}
            <h4>Compétences</h4>
            <ul className="card--skill">
                <li>{props.firstSkill}</li>
                <li>{props.secondSkill}</li>
                {props.thirdSkill && <li>{props.thirdSkill}</li>}
                {props.fourthSkill && <li>{props.fourthSkill}</li>}
            </ul>
            <ul className="card--contact">
                <li>
                    <a href={props.firstContact}>
                        <i className="card--contact__social far fa-envelope"></i>
                    </a>
                </li>
                 {props.secondContact && 
                    <li>
                        <a href={props.secondContact}>
                            <i className="card--contact__social fas fa-phone"></i>
                        </a>
                    </li>
                }
                {props.thirdContact && 
                    <li>
                        <a href={props.thirdContact}>
                            <i className="card--contact__social fab fa-instagram"></i>
                        </a>
                    </li>
                }
                {props.fourthContact && 
                    <li>
                        <a href={props.fourthContact}>
                            <i className="card--contact__social fab fa-twitter"></i>
                        </a>
                    </li>
                }
                {props.fifthContact && 
                    <li>
                        <a href={props.fifthContact}>
                            <i className="card--contact__social fab fa-github"></i>
                        </a>
                    </li>
                }
            </ul>   
        </div>
    )
}

export default Card