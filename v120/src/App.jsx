import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, incrementByAmount, multiply } from './redux/counter/counterSlice'
// import (increment)

function App() {
  const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()



  return (
    <>
    <Navbar/>
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      Currently count is:  {count}
      <button onClick={() => dispatch(incrementByAmount(6))}>+</button>
      <button onClick={() => dispatch(multiply())}>*</button>
    </div>
     </>
  )
}

export default App
