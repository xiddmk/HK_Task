import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import Error from './Components/Error';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home products={products} />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/home/AddProduct" 
          element={
            <PrivateRoute>
              <AddProduct addProduct={addProduct} />
            </PrivateRoute>
          } 
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;