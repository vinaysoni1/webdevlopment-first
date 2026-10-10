import { useContext } from "react"
// import React {useContext} from 'react'
import { CountContext } from "../Context/Context"

const Component1 = () => {
  const value = useContext(CountContext)

  return (
    <div>
      component 1: {value.count}
    </div>
  )
}

export default Component1
