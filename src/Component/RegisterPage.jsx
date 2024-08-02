import React, { useState } from 'react';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const registerUser = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!contact) {
      newErrors.contact = "Contact is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    axios.post("http://localhost:4000/user/register", { username, email, contact, password })
      .then(result => {
        if (result.status === 201) {
          alert("Registered successfully");
          navigate("/login");
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists");
        } else {
          console.error("There was an error registering the user!", err);
        }
      });
  };

  return (
    <div className='register'>
      <form className='form' onSubmit={registerUser}>
        <h1 className='headerR'>RegisterPage</h1>
        <div className='input-group'>
          <input
            className='name'
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>
        <div className='input-group'>
          <input
            className='email'
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div className='input-group'>
          <input
            className='contact'
            type='text'
            name='contact'
            placeholder='Contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          /><br />
          {errors.contact && <div style={{ color: "red" }}>{errors.contact}</div>}
        </div>
        <div className='input-group'>
          <input
            className='pass'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>
        <div className='input-group'>
          <input
            className='pass'
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /><br />
          {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
        </div>
        <input className='btnR' type='submit' value="Submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
