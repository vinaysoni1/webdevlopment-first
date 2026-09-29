import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[showbtn, setShowBtn] = useState(false)
  const[tudo, setTudo] = useState([
    {
     tittle: "this is tittle-1",
     description: "this is description-1"
    },
    {
     tittle: "this is tittle-2",
     description: "this is description-2"
    },
    {
     tittle: "this is tittle-3",
     description: "this is description-3"
    }

  ]) 

  // conditional rendering
  // const Tudo = ({tudo}) => { return (<>
  // <div className="box m-4 h-20 border border-2 border-purple-300  ">
  // <div className="tudo">{tudo.tittle}</div>
  // <div className="tudo">{tudo.description}</div>
  // </div>
  
  // </>)}

  return (
    <>
     
       {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
       {/* {showbtn && <button>i will be show only clicked by second butten</button>} */}
       {tudo.map(tudo =>{
        return <Tudo key={tudo.tittle} tudo={tudo} />
       })}
        <button
          type="button"
          className="counter"
          onClick={() => setShowBtn(!showbtn)}
        >
          Count is {count}
        </button>


     
    </>
  )
}

export default App
