import React from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import Login from './screens/Login';
import Register from './screens/Register';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import NotFound from './screens/NotFound';
import PrivateRoute from './PrivateRouter.js'; // Updated import
import AddProduct from './AddProduct.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search/:keyword" element={<HomeScreen />} />
          <Route path="/page/:pagenumber" element={<HomeScreen />} />
          <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="*" element={<NotFound />} />
          {/* testing product with images */}
          <Route path= '/createProduct' element = {<AddProduct/>} />
          {/* Private Routes */}
          <Route path="/profile" element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          }/>
          <Route path="/payment" element={
            <PrivateRoute>
              <PaymentScreen />
            </PrivateRoute>
          }/>
          <Route path="/placeorder" element={
            <PrivateRoute>
              <PlaceOrderScreen />
            </PrivateRoute>
          }/>
          <Route path="/order/:id" element={
            <PrivateRoute>
              <OrderScreen />
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
