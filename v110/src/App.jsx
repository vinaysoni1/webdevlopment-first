import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [showbtn,setshowbtn]=useState(false)
  const [todo, settodo] = useState([
    {
      tittle: "vinay",
      Des: "I am Vinay soni"
    },
     {
      tittle: "Jaish",
      Des: "I am Jaish Patel"
    },
     {
      tittle: "Deepak",
      Des: "I am Deepak Patel"
    },
  ])
  // const Tudo = ({todo}) =>{
  //   return ( 
  //     <>
  //     <div className="todo">{todo.tittle}</div>
  //     <div className="todo">{todo.Des}</div>
  //     </>
  //   )
  // }

  return (
    <> 
        {showbtn ? <button>showbtn is True</button>  : <button>showbtn is False</button>  }   

        {/* { showbtn && <button>showbtn is true</button> } */}
        <button
          type="button"
          className="counter"
          onClick={() => setshowbtn(!showbtn)}
        >
          Count is {count}
        </button>
    
      {todo.map((todo,index) =>  {
        return( 
        // <Tudo  key={index} todo={todo} />
         
      <div className='container m-4  border-4 border-purple-400'>
      <div className="todo">{todo.tittle}</div>
      <div className="todo">{todo.Des}</div>
      </div>
    )
      })}
    </>
  )
}
export default App
