// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar1 from './Component/Navbar1';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import Home from './Component/Home';
import HideNavbar from './Component/HideNavbar';
import Login from './AdminPanel/Login';
import Footer from './Component/Footer'


function App() {
  return (
    <>  
    <BrowserRouter>
    <HideNavbar><Navbar1/>
    </HideNavbar>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/Admin' element={<Login></Login>}/>
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path='/register' element={<RegisterPage></RegisterPage>}/>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
   </>
    
  )
}

export default App
