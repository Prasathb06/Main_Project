import React, { useState } from 'react';
import "./ProductCreation.css";
import axios from 'axios';
import { Container } from 'react-bootstrap';



const ProductCreation = () => {
  const [productname, setProductName] = useState('');
  const [productdis, setProductDis] = useState('');
  const [productprice, setProductPrice] = useState('');
  const [productdiscount, setProductDiscount] = useState('');
  const [productimage, setProductImage] = useState([]);
  const [productsubimages, setProductSubImages] = useState([]);

  const ProductAdded = async (e) => {
    e.preventDefault();

    const productFormData = new FormData();
    productFormData.append('productname', productname);
    productFormData.append('productdis', productdis);
    productFormData.append('productprice', productprice);
    productFormData.append('productdiscount', productdiscount);
  

    for (const file of productimage) {
      productFormData.append('productimage', file)
    }

    for (const file of productsubimages) {
      productFormData.append('productsubimages', file)
    }

    try {
      await axios.post('http://localhost:4000/product/insert', productFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product added Successfully');
      setProductName('');
      setProductDis('');
      setProductPrice('');
      setProductDiscount('');
      setProductImage([]);
      setProductSubImages([]);
    }
    catch (err) {
      console.log(err);
      alert('Product Added Failed')
    }
  }

  return (
    <>
    <h1 style={{color:"white", textAlign:"left"}}>Create New Prouct:</h1>
    <Container fluid className='addProduct' style={{color:"white"}}>
        <form onSubmit={ProductAdded} className='productForm'>
          <h3>Add New Arrival</h3>
          <input type="text"
            required
            placeholder='Product Name'
            onChange={(e) => setProductName(e.target.value)}
          />
          <input type="text"
            required
            placeholder='Productdiscription'
            onChange={(e) => setProductDis(e.target.value)}
          />
          <input type="number"
            required
            placeholder='price'
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <input type="number"
            required
            placeholder='Discount'
            onChange={(e) => setProductDiscount(e.target.value)}
          />
          <div className="inpt-files">
            <input type="file"
              required
              placeholder='Product Image'
              onChange={(e) => setProductImage(e.target.files)}
            />
            <input type="file" multiple
              required
              placeholder='Sub Images'
              onChange={(e) => setProductSubImages(e.target.files)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </Container>

    </>
  )
}

export default ProductCreation
