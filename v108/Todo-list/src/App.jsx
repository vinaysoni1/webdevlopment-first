import { useState } from 'react'
import './App.css'


export default function App() {
  const [input, setinput] = useState(" ")
  const [Tudos, setTudos] = useState([])

  function addTudo() {
    if (input === ""
    )
      return
    setTudos([...Tudos, input])
    setinput(" ")

  }
  function deleteTudos(index){
    const updated = Tudos.filter((_, i)=> i!==index);
    setTudos(updated);
  }



  return (
    <> 
    
    <div className="container">
       <h1>Todo List</h1>
      <input id='inp' type='text' placeholder='Add items' value={input} onChange={
        (e) => setinput(e.target.value)
      } />
      <button id='btn' onClick={addTudo}>Add</button>
      </div>

      <ul>{Tudos.map((item, index) => (
        <li key={index}>{item}  <button onClick={ ()=> deleteTudos(index)}>Delete</button> </li>
      ))}
      </ul>

    </>
  )
}


