import React, { useState } from 'react'

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="container mx-auto p-4 flex flex-col">
    <h1 className="text-3xl mb-4">Create Account</h1>
    <input
      type="Name"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className=" p-2 mb-4 border rounded"
    />
    <input 
      type="UserName"
      placeholder="UserName"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className=" p-2 mb-4 border rounded"
    />
     <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className=" p-2 mb-4 border rounded"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className=" p-2 mb-4 border rounded"
    />
    <button

      className=" bg-blue-500 text-white p-2 rounded"
    >
      Create Account
    </button>
  </div>
  )
}

export default CreateAccount