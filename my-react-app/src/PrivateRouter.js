import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = window.localStorage.getItem("userInfo");

  return token ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
