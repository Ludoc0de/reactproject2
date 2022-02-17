import React from "react";

function Card(props) {
   
    const styles = {
        backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '5% 95%',
        backgroundSize: '200px'
    }
    
    return(
        <section className="card--subsection" /*style={styles}*/>
            <h2 className="card--title" name="test"> {props.title} </h2>
            <h3>{props.description}</h3>
            <a href={props.website}>{props.website}</a>
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
             <img src={props.image} class="card--img"/>   
        </section>
    )
}

export default Card