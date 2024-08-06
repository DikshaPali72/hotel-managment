import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import logo from "../Image/dreamlogo.png"
import './CreateAccount.css';
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
  
    
    email: '',
    mobile: '',
    country: 'India',
    
  
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission tasks
  };

  return (
    <div className="flex items-center justify-center min-h-screen homepage-container">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-center mb-4 bg-blue-400">
          <img src={logo} alt="Logo" className="h-16 w-44" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName " className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Full Name"
            />
          </div>
        
        
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-gray-700">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Mobile"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-gray-700">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="India">India</option>
              {/* Add more options as needed */}
            </select>
          </div>
         
          
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6 w-full">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
