import React from 'react'
import "./Login.css"

const Login = () => {
    //     const registerUser=(e)=>{
    //     e.preventDefault()
    //   const User ={
    //     username:e.target.username.value,
    //     password:e.target.password.value
    //   }
      
      
    //     fetch("http://localhost:4000/user/login",{
    //       method:"Post",
    //       headers:{
    //         "Accept":"application /json",
    //         "Content-Type":"application/json"
    //       },
    //       body:JSON.stringify(User)
    //     })
    
    //     .then(res => res.json())
    //     .then((data)=>{
    //       if (data.userFound) {
    //         alert("login successfully")
    //       }else{
    //         alert("failed")
    //       }
    //     })
    // }
  return (
    <div className="Alog">
      <form className='Aform1' action='' method='post' onSubmit={(e)=>{registerUser(e)}}>
      <h1 className='headerL'>Login</h1>
        <input className='Auser' type='text' name='username' placeholder='username'></input><br></br>
        <input  className='Apass' type='password' name='password' placeholder='password'></input><br></br>
        <input className='Abtn-1' type='submit' value='login'></input>
      </form>
    </div>
  )
}

export default Login
