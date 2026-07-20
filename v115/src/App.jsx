import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
import User from './Components/User'
import { createBrowserRouter, RouterProvider } from 'react-router'


function App() {
  const router = createBrowserRouter([
    {
      path:"/home",
      element:<> <Navbar/> <Home/> </>
    },
    {
      path:"/login",
      element: <> <Navbar/><Login/> </>
    },
    {
      path:"/about",
      element: <> <Navbar/><About/> </>
    },
      {
      path:"/user/:username",
      element: <> <Navbar/><user/> </>
    }
  ])

  return (
    <>
   
     <RouterProvider router={router}/>
     
    </>
  )
}

export default App
