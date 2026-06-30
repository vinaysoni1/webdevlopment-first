
// 1. Accessing the DOM using useRef hook
// A ref created with useRef is attached to the textarea, allowing the click handler to access the DOM element and programmatically set focus.

import React, { Fragment, useRef } from 'react'

const App = () => {

  const focous =  useRef(null)
   
  const oncliclHanlde =() =>{

    // alert("hey")
    focous.current.value = "Hello, my name is Vinay Soni. I am currently learning Web Development and improving my skills in HTML, CSS, JavaScript, and React. I have worked on small projects and website clones to practice frontend development. I am interested in building user-friendly web applications and continuously learning new technologies. Along with technical skills, I am also working on improving my communication and problem-solving abilities. I am looking for opportunities to gain experience and grow in the IT industry. Thank you.";
    focous.current.Focus();

  }
  
  
  return (
    <Fragment>
    <button className='btnn' onClick={oncliclHanlde}>Click</button>
    <label>Self Introduction</label>
    <textarea  className=" box" ref={focous} />
    
    </Fragment>
  )
}

export default App
