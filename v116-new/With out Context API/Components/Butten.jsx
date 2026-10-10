import React from 'react'
import Component1 from './Component1'

const Butten = ({count}) => {
  return (
    <div>
      <button><span><Component1 count={count}/></span>I am Button</button>
    </div>
  )
}

export default Butten
