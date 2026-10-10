import React,{useContext} from 'react'
import Component1 from './Component1'
import { CountContext } from "../Context/Context"

const Butten = () => {
  const value = useContext(CountContext)

  return (
    <div>
      <button  onClick={() => value.setCount((count) => count + 1)}><span><Component1 /></span>Click Me</button>
    </div>
  )
}

export default Butten
