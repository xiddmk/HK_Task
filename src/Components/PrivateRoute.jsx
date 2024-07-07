// Components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;