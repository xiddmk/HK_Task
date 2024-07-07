import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = () => {
    if (name && price) {
      addProduct({ name, price });
      setName('');
      setPrice('');
      navigate('/home');
    }
  };

  return (
    <div className='h-screen w-screen  flex flex-col justify-center align-middle items-center'>
      <h3 className='font-bold text-3xl'>Add Product</h3>
      <div className='border flex flex-col gap-4 justify-center align-middle items-center h-[60%] w-[30%] '>
        <input className='border w-[70%] py-3 px-2' type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='border w-[70%] py-3 px-2' type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button className='bg-green-400 border py-3 px-[31%] ' onClick={handleAddProduct}>Add</button>
        <button className='bg-red-300 border py-3 px-[31%] '><Link to="/home"> Back</Link></button>
        
      </div>
    </div>
  );
};

export default AddProduct;