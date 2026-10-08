import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Vinay Bhai")
  const [form, setform] = useState({})

  const click = () =>{
    alert("hello")
  }

  // const red = () =>{
  //   alert("over a red div")
  // }

  const Handlechange = (event) =>{
    // setname(event.target.value)
    setform({...form, [event.target.name]: event.target.value})
    console.log(form)
  }

  return (
    <>
    <div className="button">
      <button onClick={click}>Click me</button>

    </div>

    {/* <div onMouseOver={red} className="red">
      I am Red
    </div> */}
    <input type="text" name='email' value={form.email ? form.email : ""} onChange={Handlechange} />
    <input type="text" name='phone' value={form.phone ? form.phone : ""} onChange={Handlechange} />
     
    </>
  )
}

export default App
