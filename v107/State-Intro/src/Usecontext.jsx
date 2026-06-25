import  { useState } from 'react'

const Usecontext = () => {
    const[user,setuser] = useState("vinay bhai")
    
  return (
    <div>
      <hi> hii {user}</hi>
      
    </div>
  )
}

export default Usecontext;
