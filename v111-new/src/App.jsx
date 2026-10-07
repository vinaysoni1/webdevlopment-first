import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await a.json();
    setcards(data)
    console.log(data)
  }


  useEffect(() => {
    fetchData()

  })

  return (
    
    <>
    <Navbar />
      <div className="conatainer">
        {cards.map((cards)=>{
          return <div className="cards">
            <h1>{cards.albumId}</h1>
            <p>{cards.id}</p>
            <span>{cards.title}</span>
            {/* <span>{cards.url}</span>
            <span>{cards.thumbnailUrl}</span> */}

        </div>
        })}
       
      </div>

    </>
  )
}

export default App
