import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Pagination from './pagination';
import axios from 'axios';

const ShopSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:8081/api/products/');
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchproducts();
  }, []); // Removed unnecessary dependencies from the dependency array

  return (
    <div className='container'>
      <div className='section'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 article'>
            <div className='shopcontainer row'>
              {products.map((product) => (
                <div className='shop col-lg-4 col-md-6 col-sm-6' key={product.product_id}>
                  <div className='border-product'>
                    <Link to={`/product/${product.product_id}`}>
                      <div className='shopBack'>
                        {/* Use the image path directly */}
                        <img src={`http://localhost:8081/images/`+ product.image} alt={product.name} />
                      </div>
                    </Link>
                    <div className='shoptext'>
                      <p><Link to={`/product/${product.product_id}`}>{product.name}</Link></p>
                      <h2>Item Description</h2>
                      <p>{product.description}</p>
                      <h3>{product.price}/-</h3>
                    </div>
                  </div>
                </div>
              ))}
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
