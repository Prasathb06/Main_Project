import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and Passwords is required");
      return;
    }
    try {
      const result = await axios.post("http://localhost:4000/user/login", { email, password })
      if (result.data.userFound) {
        alert("Login Successfully");
        navigate("/");
      } else {
        alert("Login Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <div className="log">
      <form className='form1' onSubmit={handleLogin}>
        <h1 className='header'>Login</h1>
        <input 
          className='user1' 
          type='text' 
          name='email' 
          placeholder='email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        /><br />
        <input 
          className='pass1' 
          type='password' 
          name='password' 
          placeholder='password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        /><br />
        <input className='btn-1' type='submit' value='Login' />
        <p className="reg text-white">
          Don't have an account? <a href="./register"><b>Register</b></a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
