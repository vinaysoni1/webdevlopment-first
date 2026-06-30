
// 1. Accessing the DOM using useRef hook
// A ref created with useRef is attached to the textarea, allowing the click handler to access the DOM element and programmatically set focus.

import React, { Fragment, useRef } from 'react'

const App = () => {

  const focous =  useRef(null)
   
  const oncliclHanlde =() =>{

    // alert("hey")
    focous.current.value = "My self Vinay soni & I am currently study for Web-Development";
    focous.current.Focus();

  }
  
  
  return (
    <Fragment>
    <button className='btnn' onClick={oncliclHanlde}>Click</button>
    <label>Your Introduction</label>
    <textarea ref={focous} />
    
    </Fragment>
  )
}

export default App
