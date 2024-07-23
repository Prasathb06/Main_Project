import React from 'react'
import "./AdminController.css"

const AdminController = () => {
  return (
    <div className='productform'>
      <form className='product'>
        <h2>Add New Product</h2>
        <div className='pname'>
          <label style={{padding:"20px"}}>ProductName</label>
          <input type='text' name='productname' placeholder='name' ></input><br></br>
        </div>
        <div className='pdesc'>
          <lable style={{padding:"20px"}}>Description</lable>
          <input type='text' name='productdesc' placeholder='desc'  ></input><br></br>
        </div>
        <div className='pprice'>
          <lable style={{padding:"20px"}}>Product Price</lable>
          <input type='number' name='productprice' placeholder='price' ></input><br></br>
        </div>
        <div className='pimage'>
          <lable >Product Image</lable>
          <input type='file' name='productimg' placeholder='ChooseImage' ></input><br></br>
        </div>
        <div>
          <input className='btnA' type='submit' value="submit"></input>
        </div>
      </form>
    </div>
  )
}

export default AdminController
