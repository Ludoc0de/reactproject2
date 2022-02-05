import './style.css'
import React from "react"
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {

  const[page, setPage]= React.useState(true)

  function toggle() {
    setPage(prevPage => !prevPage)
  }

  const cardAppear = {
    opacity: page ? "0": "1",
    transition: "1s ease-in 0.5s"
  }

  const cards = data.map(item => {
    return(
      <Card 
        key={item.id} 
        image= {item.image}
        title={item.title}
        description={item.description}
        website={item.website}
        firstSkill={item.skill.first}
        secondSkill={item.skill.second}
        thirdSkill={item.skill.third}
        fourthSkill={item.skill.fourth}
        firstContact={item.contact.first}
        secondContact={item.contact.second}
        thirdContact={item.contact.third}
        fourthContact={item.contact.fourth}
        fifthContact={item.contact.fifth}
        // {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header handleClick={toggle} /> 
      <Hero emerge={page}/>
      <section className='card' style={cardAppear}>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
