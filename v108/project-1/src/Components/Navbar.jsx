import React, { useEffect } from 'react'

const Navbar = ({color}) => {

    // case 0: Run will be every render !!
  useEffect(()=>{
    alert("Hey I am run will be every render")
  },)

   // case 1: Run will be only on one render !!
   useEffect(()=>{
    alert("Hey I am run will be only on one  render")
  },[])

//   example of cleaup
useEffect(()=>{
    alert("Hey I am run when the Navbar is not present in the display")

    return ()=>{
        alert("component unmounted")
    }
  },[])

  // case 2: Run will be only on certain value !!
  useEffect(()=>{
    alert("I am run when the color was changed")
    
  },[color])

  return (
    <div>
      I am {color} color Navbar...
    </div>
  )
}

export default Navbar
