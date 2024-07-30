import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
   <div className=' flex justify-between  bg-slate-600 p-4 text-white'>
    <div>
      logo
    </div>
    <div className='  flex gap-16'>

      <button> Contact Us</button>
   
    <NavLink to={"/Login"}>login</NavLink>
      
      <button>Logout</button>
    
    
    </div>
  </div> 

  </>
  )
}

export default Navbar

