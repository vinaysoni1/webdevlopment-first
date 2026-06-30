// playing and peuse a video

import React, { useRef, useState } from 'react'

const App_6 = () => {
  const[Playing , setPlaying]=useState(false)
  const ref= useRef(null)
  
  function handleclick(){
    const nextPlaying =!Playing;
    setPlaying(nextPlaying)

    if(nextPlaying){
      ref.current.play();
    }
      else{
        ref.current.pause()
    }

  }
  return (
   <main className='container'>
   <button className='Play' onClick={handleclick}> {Playing ? 'Pause' : 'Play'} </button>
   <video className='vdo' width={250} ref={ref} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}>
    <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
   </video>
   </main>
  )
}

export default App_6