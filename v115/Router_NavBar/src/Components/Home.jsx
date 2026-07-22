import React from 'react'
import { useState } from 'react'

const Home = () => {
  const carType = () =>{
    
  }
  const BikeType = () =>{
    alert("bike")
  }
  

  
  return (
    <div>
      <button onClick={carType}>Car</button>
      <button onClick={BikeType}>Bike</button>
    </div>
  )
}

export default Home