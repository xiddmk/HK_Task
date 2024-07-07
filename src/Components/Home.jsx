import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ products = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='h-screen w-screen overflow-y-scroll '>
      <div className='h-20 flex justify-center align-middle items-center gap-32 bg-green-400'>
        <h1 className='font-semibold'><Link to="/home/AddProduct">Add Product</Link></h1>
        <button className='font-semibold text-red-700' onClick={handleLogout}>Logout</button>
      </div>
      <div className='flex flex-col justify-center align-middle items-center'>
        <SearchBar setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;