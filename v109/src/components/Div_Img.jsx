import React from 'react'

const Div_Img = () => {
  return (
     <div>
      <ul ref={Listref}>
        <li>
           <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
            />
        </li>
        <li>
           <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
            />
        </li>
        <li>

          <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
            />
        </li>
      </ul>
    </div>
  )
}

export default Div_Img