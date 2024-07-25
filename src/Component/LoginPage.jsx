import React, { useState } from 'react'
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const nav = useNavigate();

  const handlelogin=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/user/login",{email,password})
    .then(result =>{
      if(result.data === "success"){
        alert("Login Successfully");
        nav("/");
      }else{
        alert("Login Failed")
      }
    })
    .catch(err => console.log(err))

  }
  return (
    <>
    <div className="log">
      <form className='form1' action='' method='post' onSubmit={handlelogin}>
      <h1 className='header'>Login</h1>
        <input className='user1' type='text' name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <input  className='pass1' type='password' name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <input className='btn-1' type='submit' value='Login'></input>
        <p className=" reg text-white">Don't have an account?<a href="./register"><b>Register</b></a></p>
      </form>
    </div>
    </>
  )
}

export default LoginPage

