import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../Image/dreamlogo.png"
const Navbar = () => {
  const navigate = useNavigate();
  return (
  <>
   <div className='bg-slate-600 p-4 text-white'>
    <div  className='container mx-auto flex justify-between items-center '>
    <img  onClick={()=>{navigate("/")}} src={logo} alt="Travel Logo" className="h-14 w-56 " />
    <div className='  flex gap-4'>

       <button onClick={()=>{navigate("/ContactUsPage")}}> Contact Us</button> 
   
    <NavLink to={"/Login"}>login</NavLink>
      
      <button onClick={()=>{navigate("/")}}>Logout</button>
    
    </div>
    </div>
  </div> 

  </>
  )
}

export default Navbar

