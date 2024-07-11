import React from 'react'
import './LoginPage.css';
// import { Link } from 'react-router-dom';

const LoginPage = () => {
  const registerUser=(e)=>{
    e.preventDefault()
    const User ={
      username : e.target.username.value,
      password : e.target.password.value
    }

    fetch("http://localhost:4000/user/Login",{
      method:"POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(User)
    })
    .then(res => res.json())
    .then((data)=>{
      if(data.userFound){
        alert("Login Successfully")
      }else{
        alert("Login Failed")
      }
    })
  }
  return (
    <>
    <div className="log">
      <form className='form1' action='' method='post' onSubmit={(e)=>{registerUser(e)}}>
      <h1 className='header'>Login</h1>
        <input className='user1' type='text' name='username' placeholder='username'></input><br></br>
        <input  className='pass1' type='password' name='password' placeholder='password'></input><br></br>
        <input className='btn-1' type='submit' value='submit'></input>
        <p className=" reg text-white">Don't have an account?<a href="./register"><b>Register</b></a></p>
      </form>
    </div>
    </>
  )
}

export default LoginPage

