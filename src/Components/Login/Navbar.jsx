import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../Image/dreamlogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-slate-600 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Travel Logo"
            className="h-14 w-56 cursor-pointer"
          />
          <div className='hidden md:flex gap-4'>
            <button onClick={() => navigate("/ContactUsPage")}>Contact Us</button>
            <NavLink to="/Login">Login</NavLink>
            <button onClick={() => navigate("/")}>Logout</button>
          </div>
          <div className='md:hidden'>
            <button onClick={handleToggle}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className='md:hidden flex flex-col gap-2 mt-2'>
            <button className='text-left w-full py-2' onClick={() => { setIsOpen(false); navigate("/ContactUsPage"); }}>Contact Us</button>
            <NavLink className='text-left w-full py-2' to="/Login" onClick={() => setIsOpen(false)}>Login</NavLink>
            <button className='text-left w-full py-2' onClick={() => { setIsOpen(false); navigate("/"); }}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
