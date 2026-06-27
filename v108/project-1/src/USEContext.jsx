import {useState,createContext,useContext} from 'react'
import { createRoot } from 'react-dom/client';

const Usercontext = createContext();

function USEContext() {
  const[user,setuser]= useState("vinay");
  return(
    <Usercontext.Provider value={user}>
        <h1>Hello {user} !</h1>
        <Component2/>
        <Component3/>
    </Usercontext.Provider>
  )
}

function Component2(){
  return(
  <>
  <h1>Hello component2</h1>
  <Component3/>
  </>
  )
}

function Component3(){
  const user = useContext(Usercontext );
  return (
    
  <>
  <h1>Hello  component3</h1>
  <h2>Hello {user}</h2>
  </>
  )
}


export default USEContext;