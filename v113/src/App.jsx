import { useState } from 'react'
import Navbar from './Components/Navbar'


function App() {
  const [tudo, setTudo] = useState("")
  const [tudos, setTudos] = useState([])

  const handleAdd = () => {
    setTudos([...tudos, {tudo, isCompleted: false}])
    setTudo("")
    console.log(tudos)
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
         
          return<div key={tudo} className="Tudo flex w-full justify-between">

            <div className={item.isCompleted? "" : 'line-through'}>{item.tudo}</div>
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
