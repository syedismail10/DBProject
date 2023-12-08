import React from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom' 
import { useState } from 'react'

function AddProduct() {
    const[file,setFile] = useState('')
    const [product_id,setProductid] = useState('')
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [discount_id,setDiscountId] = useState('')
    const [quantity,setQuantity] = useState('')
    const [category_id,setCategoryId] = useState('')
    const [price,setPrice] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    
        // Create an instance of FormData
        const formData = new FormData();
    
        // Append the fields to formData
        formData.append('product_id', product_id);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('discount_id', discount_id);
        formData.append('quantity', quantity);
        formData.append('category_id', category_id);
        formData.append('price', price);
        formData.append('image', file); // Append the file
    
        // Make the post request with axios
        axios.post('http://localhost:8081/api/products/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Important for files
            },
        })
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }
    
    return (
    <div className="container d-flex flex-column justify-content-center align-items-center login-center">
       <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
        <h2>Add a product</h2>
        <div>
            <label htmlFor=''>Product_id</label>
            <input type = "number"
            onChange={e => setProductid(e.target.value)}
            ></input>
            <label htmlFor=''>Name</label>
            <input type = "text"
            onChange={e => setName(e.target.value)}></input>
            <label htmlFor=''>Description</label>
            <input type = "text"
            onChange={e => setDescription(e.target.value)}></input>
            <label htmlFor=''>SetDiscountId</label>
            <input type = "number"
            onChange={e => setDiscountId(e.target.value)}></input>
            <label htmlFor=''>Quantity</label>
            <input type = "number"
            onChange={e => setQuantity(e.target.value)}></input>
            <label htmlFor=''>Category_id</label>
            <input type = "number"
            onChange={e => setCategoryId(e.target.value)}></input>
            <label htmlFor=''>Price</label>
            <input type = "number" step='50'
            onChange={e => setPrice(e.target.value)}></input>
            <label htmlFor=""> Upload product image</label>
            <input type='file' onChange={ e => setFile(e.target.files[0])} placeholder='Upload Product Image'></input>

        </div>
        <button> Submit</button>
        </form> 
    </div>
  )
}

export default AddProduct