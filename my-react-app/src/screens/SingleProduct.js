import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link, useParams } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const {id} = useParams()
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});
  

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8081/api/products/product/${id}`);
        setProduct(data[0]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchproducts();
  }, []);
  
  const history = useNavigate()
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, products } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  const AddToCartHandle = (e) => {
    e.preventDefault();
    history(`/cart/${product.product_id}?qty=${qty}`);
  };
  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={`http://localhost:8081/images/`+ product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>{product.price}/-</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product.quantity > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>unavailable</span>
                      )}
                    </div>
                    {product.quantity > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.quantity).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button
                          onClick={AddToCartHandle}
                          className="round-black-btn"
                        >
                          Add To Cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default SingleProduct;