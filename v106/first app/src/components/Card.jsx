import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://c8.alamy.com/comp/2G7P1N8/coder-programmer-hacker-coding-cyber-attack-computer-network-information-protection-security-2G7P1N8.jpg" alt="" height={100} width={200} />
      <h>{props.tittle}</h>
      {/* <p>{props.Des}</p> */}

    </div>
  )
}

export default Card
