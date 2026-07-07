import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('Vinay Soni')
  const [form, setform] = useState({email: '', phone: ''})

  const hadleclick = () => {
    alert('Me click hua bhai')
  }
  const hadlemouseover = () => {
    alert('Mouse hover hua bhai')
  }

  const chnagename = (event) => {
    // setName(event.target.value)
    setform({...form, [event.target.name]: event.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="butten">
        <button onClick={hadleclick}>Click me </button>
      </div>

      {/* <div className="red" onMouseOver={hadlemouseover}>
        I am a redd div
      </div> */}

      <input type="text" name='email'  value={form.email} onChange={chnagename} />
      <input type="text" name='phone' value={form.phone} onChange={chnagename} />
    </>
  )
}

export default App
