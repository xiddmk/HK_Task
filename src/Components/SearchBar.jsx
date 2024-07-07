import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div>
      <input className='py-3 px-10 w-96  border-2 ' type="text" placeholder="Search Products" onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
};

export default SearchBar;