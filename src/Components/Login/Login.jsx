import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password ,setPassward]=useState("")
  const [isOpen, setIsOpen] = useState(true)
 const handleLogin =()=>{
  alert("account is created")
  
 }
 const handleClose = () => {
  setIsOpen(false);
};
if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-1/3 relative">
        <button 
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          &times;
        </button>
        <h2 className="text-2xl mb-4"></h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}

        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e)=>{setPassward(e.target.value)}}

        />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
          login
        </button>
        <button onClick={()=>{Navigate("/CreateAccount")}} className="w-full text-blue-500">create accound</button>
      </div>
    </div>
  );
};

export default Login;
