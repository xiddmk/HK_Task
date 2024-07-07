import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className='flex flex-col h-screen w-screen justify-center align-middle items-center'>
      <h2 className='text-3xl'>Login</h2>

      <div className='h-[60%] w-[30%]   border flex justify-center align-middle items-center'>
      <form onSubmit={handleLogin} className='flex gap-6 flex-col w-3/4'>
        <input className='border py-3 px-2' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className='border py-3 px-2' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className='bg-green-400 py-3 border' type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;