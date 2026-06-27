import {useEffect,useState,useRef} from 'react'

function UseReff() {
    const[Input,setInput]= useState(' ')
    const preveiusInp = useRef(' ')
    useEffect (()=>{
        preveiusInp.current=Input;
    },[Input]);
  return (
    <>
    <input type='text' value={Input}  onChange={(e)=>setInput(e.target.value)}/>
    <h2>Current value:- {Input}</h2>
    <h2>Preveius value:- {preveiusInp.current}</h2>
    </>
  )
}

export default UseReff