import React from 'react'
import Navbar from './Components/Login/Navbar'
 import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CreateAccount from './Components/Login/CreateAccount'
import Login from "./Components/Login/Login"
import HomePage from './Components/Pages/HomePage'

function App() {

const router =createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><HomePage/></>
  },
  
  {
    path:"/Navbar",
    element:<Navbar/>
  },
  {
    path:"/Login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/CreateAccount",
    element:<><Navbar/><CreateAccount/></>
  },
 
])
  return (
    <>
 
 <RouterProvider router={router}>

 </RouterProvider>
     

       
    </>
  )
}

export default App
