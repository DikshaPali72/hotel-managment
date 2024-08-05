import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import loginbg from "../Image/loginbg.png"


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required.';
    else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) newErrors.email = 'Enter a valid email address.';
    }
    if (!password) newErrors.password = 'Password is required.';
   else{
     const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) 
      newErrors.password = 'Password must be at least 6 characters long and contain at least one uppercase letter.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      navigate("/")
      // Perform form submission tasks
    }
  };
  return (
    <div className="flex  min-h-screen w-full  bg-gray-50 justify-center">
      <div className="bg-white p-4 mt-10  rounded-lg  h-full sm:max-w-md sm:w-full">
      
        <h1 className="text-3xl font-bold text-center  mb-6">Log in</h1>
       
      
       <form
       onSubmit={handleSubmit}
       >
       <div className="mb-6">
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 bg-gray-100  focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        <div className="mb-6">
          <label htmlFor="password" className="text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 bg-gray-100  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="text-gray-700 ml-2">
              Remember me
            </label>
          </div>
          <button
        
          type="submit"
          className=" text-sm text-blue-600 hover:underline"
        >
          reset password
          </button>
         
        </div>
        <button
        
          type="submit"
          className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Log in
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don't have an account yet?{" "}
            
            <button
        onClick={()=>{navigate("/CreateAccount")}}
          type="submit"
          className="rounded-md text-blue-700    font-bold py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
         New Account

        </button>
          </p>
        </div>
       </form>
      </div>
      <div className="w-[450px] ml-20  mt-10">
        <img src={loginbg}></img>
      </div>
    </div>
  );}

export default Login;
