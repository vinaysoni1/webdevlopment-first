import { useState } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [tudo, setTudo] = useState("")
  const [tudos, setTudos] = useState([])

  const handleAdd = () => {
    setTudos([...tudos, { id: uuidv4(), tudo, isCompleted: false }])
    setTudo("")
    console.log(tudos)
  }

  const handlecheckbox = (e) =>{
  let id=  e.target.name;
  // console.log(`the id is ${id}`)
   let index =tudos.findIndex(item=>{
    return item.id===id;
   })
   console.log(index)
   let Newtudos = [...tudos];
   Newtudos[index].isCompleted = !Newtudos[index].isCompleted;
  //  setTudo(Newtudos)
   console.log(Newtudos,tudos)
  }

   const handleChange = (e) => {
    setTudo(e.target.value)
  }

  const HandleEdit = () => {
    alert("edit")
  }

  
  const handleDelete = () => {
   alert("delete")
  }

  
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5  p-5 rounded-xl  bg-violet-100 min-h-[70vh] ">

        <div className="addtudo">
          <h2 className='text-lg font-bold'>Add A Tudos</h2>
          <input onChange={handleChange} value={tudo} type="text" className='border bg-white border-gray-300 rounded-md p-2'/>
          <button onClick={handleAdd} className='bg-blue-500 text-white font-semibold px-6 py-2  hover:bg-blue-900 m-8 rounded-md' >Add</button>
        </div>

        <h2 className='text-lg font-bold'>Your Tudos</h2>

        <div className="Tudos">
         {tudos.map(item=>{
         
          return<div key={item.id} className="Tudo flex w-full justify-between">
            <input name={item.id} onChange={handlecheckbox} type='checkbox' value={item.isCompleted}  id='' />

            <div className={item.isCompleted? "line-through" : ""}>{item.tudo}</div>
              <div className="btn">
                <button onClick={HandleEdit}  className='bg-blue-500 text-white font-semibold px-6 py-2  hover:bg-blue-900 m-8 rounded-md'>Edit</button>
                <button onClick={handleDelete}  className='bg-blue-500 text-white font-semibold px-6 py-2  hover:bg-blue-900 m-8 rounded-md'>Delete</button>
              </div>
            </div>
            })}

          </div>
          
        </div>
        
      
           
    </>
  )
}

export default App
