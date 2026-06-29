import {useEffect, useRef} from 'react'

const App_3 = () => {
  // const ref =useRef(0);
  const ref= useRef(0)

  useEffect(()=>{
    ref.current = ref.current+1;
   
  },[])
  return (
    <>
    <button onClick={()=> alert(`You Clicked ${ref.current} time !!`)}> Click me !</button>

    </>
  )
}

export default App_3