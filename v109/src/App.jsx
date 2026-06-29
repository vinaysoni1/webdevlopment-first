import React, { useRef } from 'react'
const App = () => {
  const Listref = useRef(null)

  function  scrollToIndex(index){
    const listnode= Listref.current;

    const imgNode= listnode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
       behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
    <main className='main'>
    <nav className='btn'>
      <button onClick={() => scrollToIndex(0)}>Left_side_Images</button>
      <button onClick={() => scrollToIndex(1)}>Middle_Images</button>
      <button onClick={() => scrollToIndex(2)}>Right_side_images</button>
    </nav>
    <div className='images'>
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
    </main>
  )
}

export default App