import {useRef, useState } from 'react'

export default function App_4() {
  const [StartTime, setStartTime] = useState(null)
  const [now, setnow] = useState(null)
  const intervalref = useRef(null)

  function handlestart() {
    setStartTime(Date.now())
    setnow(Date.now())
    clearInterval(intervalref.current)

    intervalref.current = setInterval (()=>{
      setnow(Date.now())
    },10)
  }


  function handlestop() {
    clearInterval(intervalref.current)
  }

  let secondpassed=0;
if(StartTime !=null && setnow !=null) {
  secondpassed = (now-StartTime)/1000;
}


  return (
    <>
      <h1>Time passed: {secondpassed.toFixed(3)} </h1>
      <button onClick={handlestart}>Start</button>
      <button onClick={handlestop}>Stop</button>

    </>
  )
}

