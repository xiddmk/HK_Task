import React from 'react';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className='font-bold'>No Product Found</p>;
  }

  return (
    <div className='h-[100%] w-[29%] flex flex-col justify-center align-middle'>
      <h3 className='flex justify-center px-2 py-2 font-bold'>Product List</h3>
      <ul className='gap-2 flex flex-col'>
        {products.map((product, index) => (
          <li className='flex justify-between w-[100%] border py-3 px-2' key={index}><h5>{product.name}</h5><h5>Rs. {product.price}</h5></li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;