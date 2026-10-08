import React, {useState} from 'react'

const Form_Submit = () => {
    const [name, setname] = useState("")

    const Form = (event) =>{
        event.preventDefault();
        alert("form submitted")
    }

    const screenshow = (e) =>{
         setname(e.target.value);

    }
  return (
    <form className="form" onSubmit={Form}>
        <input type="text" placeholder="Enter your name" value={name} onChange={screenshow} />
        <button type="submit">Submit</button>
        <h2> {name} </h2>
    </form>
  )
}

export default Form_Submit
