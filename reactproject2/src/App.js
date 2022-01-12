import './style.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {
  const cards = data.map(item => {
    return(
      <Card 
        image= {item.image}
        title={item.title}
        description={item.description}
        website={item.website}
        firstSkill={item.skill.first}
        secondSkill={item.skill.second}
        thirdSkill={item.skill.third}
        fourthSkill={item.skill.fourth}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className='card'>
        {cards}
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
