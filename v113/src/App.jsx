import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import {  v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";





function App() {
  const [tudo, setTudo] = useState("")
  const [tudos, setTudos] = useState([])
  const [ShowFinished, setShowFinished] = useState(true)



  useEffect(()=>{
    let tudoString = localStorage.getItem("tudos");
    if(tudoString){

       let tudos = JSON.parse(localStorage.getItem("tudos"))
    setTudos(tudos)
    }
   
  },[])

  const togglefinished = (e) =>{
    setShowFinished(!ShowFinished)

  }


  const saveToLS = () =>{
    localStorage.setItem("tudos", JSON.stringify(tudos))

  }

  const handleAdd = () => {
    setTudos([...tudos, { id: uuidv4(), tudo, isCompleted: false }])
    setTudo("")
     saveToLS()

  }

  const handlecheckbox = (e) =>{
  let id=  e.target.name;
  
   let index =tudos.findIndex(item=>{
    return item.id===id;
   })
   
   let Newtudos = [...tudos];
   Newtudos[index].isCompleted = !Newtudos[index].isCompleted;
    saveToLS()
  
  }

   const handleChange = (e) => {
    setTudo(e.target.value)
  }

  const HandleEdit = (e,id) => {
    let t = tudos.filter(i=>i.id===id)
    setTudo(t[0].tudo)
    let Newtudos =  tudos.filter((item=>{
    return item.id!==id
   }))
  
  setTudos(Newtudos)
  saveToLS()

 
  }

  
  const handleDelete = (e,id) => {
   let Newtudos =  tudos.filter((item=>{
    return item.id!==id
   }))
  
  setTudos(Newtudos)
   saveToLS()

  
  }

  
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5  p-5 rounded-xl  bg-violet-100 min-h-[70vh]  w-1/2">

        <div className="addtudo">
          <h2 className='text-lg font-bold'>Add A Tudos</h2>
          <input onChange={handleChange} value={tudo} type="text" className='border bg-white border-gray-300 rounded-md p-2'/>
          <button onClick={handleAdd} disabled={tudo.length < 3} className='bg-blue-500 disabled:bg-violet-700 text-white font-semibold px-6 py-2  hover:bg-blue-900 m-8 rounded-md' ><MdOutlineSaveAlt /></button>
        </div>
        <input onChange={togglefinished} type='checkbox' checked={ShowFinished} /> Show Finished

        <h2 className='text-lg font-bold'>Your Tudos</h2>

        <div className="Tudos">

          {tudos.length===0 && <div className=' text-lg font-semibold'>No Tudos Found</div>}
         {tudos.map(item=>{  

          return (ShowFinished || ! item.isCompleted) &&<div key={item.id} className="Tudo flex w-full justify-between">

            <div className="flex items-center gap-2  mt-0">
            <input name={item.id} onChange={handlecheckbox} type='checkbox' checked={item.isCompleted}  id='' />

            <div className={item.isCompleted? "line-through" : ""}>{item.tudo}</div>
            </div>
              <div className="btn flex h-full">
                <button onClick={(e)=>HandleEdit(e,item.id)}  className='bg-blue-500 text-white font-semibold px-6 py-2  hover:bg-blue-900 m-2 rounded-md'><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}}  className='bg-blue-500 text-white font-semibold px-6 py-2  hover:bg-blue-900 m-2 rounded-md'><MdDelete /></button>
              </div>
            </div>
            })}

          </div>
          
        </div>
       
    </>
  )
}

export default App
