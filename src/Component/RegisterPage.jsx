import React from 'react'
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const registerUser=(e)=>{
    e.preventDefault()
  const User ={
    username:e.target.username.value,
    email:e.target.email.value,
    contact:e.target.contact.value,
    password:e.target.password.value
  }
  
  
    fetch("http://localhost:4000/user/register",{
      method:"POST",
      headers:{    
        "Accept":"application /json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(User)
    })

    .then(res => res.json())
    .then((data)=>{
      console.log(data);
    }) 
}
  return (
    <>
      <div className='register'>
      <form  className='form' action='' method='post' onSubmit={(e)=>{registerUser(e)}}>
        <h1 className='headerR'>RegisterPage</h1>
      <input className='name' type='text' name='username' placeholder='userame'></input><br></br>
      <input className='email' type='text' name='email' placeholder='email'></input><br></br>
      <input className='contact' type='text' name='contact' placeholder='contact'></input><br></br>
      <input className='pass' type='password' name='password' placeholder='password'></input><br></br>
      <input className='btnR' type='submit' value="submit" onClick={navigate("/login")}></input>
      </form>
      </div>
    </>
  )
}

export default RegisterPage
