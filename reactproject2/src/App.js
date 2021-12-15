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
        title={item.title}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      {cards}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
