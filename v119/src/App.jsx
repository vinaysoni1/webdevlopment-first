import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors,isSubmitting },
  } = useForm({
    mode: "onChange"
  });

  const delay = (d) =>{
    return new Promise((resolve,rejected)=>{
      setTimeout(()=>{
        resolve()
      },d*1000)
    })
  }

  const onSubmit = async (data) =>{
    // await delay(2)
    let r = await fetch ("http://localhost:3000/" , {method:"post",
       headers: {
    "Content-Type": "application/json"
  }, body: JSON.stringify(data)})
    let res = await r.json()
  console.log(data,res)
  // if(data.username!=="Shubham"){
  //   setError("myform", {message:"Your form is not a good order"})
  // }
  // if(data.username!=="Rohan"){
  //   setError("Blocked", {message:"This User Are Blocked"})
  // }
  
  } 

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="conatainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Username' {...register("username", { required: {value:true , message:"username Required"}, minLength: {value:3, message:"Min length is 3"}, maxLength:{value:8 , message:"max length is 8"} })} type="text" />  
          {errors.username && <p className="red">{errors.username.message}</p>}
          <br />
          <input placeholder='password' {...register("password", {required:{value:true , message:"password Required"},minLength: {value:5, message:"Min length of password is 5"}})} type="password" />
          {errors.password && <p className="red">{errors.password.message}</p>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <p className="red">{errors.myform.message}</p>}
          {errors.Blocked && <p className="red">{errors.Blocked.message}</p>}
        </form>
      </div>
      

    </>
  )
}

export default App
