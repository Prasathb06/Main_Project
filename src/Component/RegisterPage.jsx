import React, { useState } from 'react'
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const registerUser=(e)=>{
    e.preventDefault()
    if(formType === "register"){
      let newErrors ={};
      if(!username){
        newErrors.username = "Username is required";
      }
      if(!email){
        newErrors.email = "Email is required";
      }
      if(!contact){
        newErrors.contact = "contact is required";
      }
      if(!password){
        newErrors.password = "Password is required";
      }
      setErrors(newErrors);
    }
    axios.post("http://localhost:4000/user/register", {username, email, contact, password})
    .then(result =>{
      if(result.status === 201){
        alert("register successfully")
        nav("/login");
      }
    })
    .catch(err => {
      if(err.response && err.response.status === 400){
        window.alert("email already exists")
      }else{
        console.log(err);
      }
    })
     
}
  return (
    <>
      <div className='register'>
      <form  className='form'  action='' method='post' onSubmit={registerUser}>
        <h1 className='headerR'>RegisterPage</h1>
      <input className='name' type='text' name='username' placeholder='userame' onChange={(e)=>setName(e.target.value)}></input><br></br>
      <input className='email' type='text' name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
      <input className='contact' type='text' name='contact' placeholder='contact' onChange={(e)=>setContact(e.target.value)}></input><br></br>
      <input className='pass' type='password' name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <input className='btnR' type='submit' value="submit" ></input>
      </form>
      </div>
    </>
  )
}

export default RegisterPage
