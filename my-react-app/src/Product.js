import React, { useState,useEffect } from "react";
import axios from 'axios'

function Product(){
    const [product,setProduct] =  useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    }, [])
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                       <th>Product Name</th>
                       <th>Price</th>
                    </tr>
              </thead>
              <tbody>
                    {
                        product.map((data,i) => (
                          <tr key = {i}>
                              <td>{data.name}</td>
                               <td>{data.price}</td>
                           </tr>
                         ))
                    }   
                </tbody>
            </table>
        </div>
    )
}

export default Product