import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './assets/data'
//console.log(data)

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
        //{...item}
        // when using spread "..." in {...item} dont forget to remove the item in the props reference at Card.jsx file
      />
    )
  })
  return(
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
