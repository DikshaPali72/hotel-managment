import React from 'react'
import Navbar from './Components/Login/Navbar'
 import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CreateAccount from './Components/Login/CreateAccount'
import Login from "./Components/Login/Login"
import HomePage from './Components/Pages/HomePage'
import HotelSearch from './Components/Pages/HotelSearch'
import ConfirmPage from './Components/Pages/ConfirmPage'
import PaymentPage from './Components/Pages/PaymentPage'

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
  {
    path:"/HotelSearch",
    element:<><Navbar/><HotelSearch/></>
  },
  {
    path:"/ConfirmPage",
    element:<><Navbar/><ConfirmPage/></>
  },
  {
    path:"/PaymentPage",
    element:<><Navbar/><PaymentPage/></>
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
