import React from 'react';

import '../styles/Input.css';
// @ts-ignore
const Input = ({ handleSearch }) => {
  return (
    <div className='input-wrapper'>
      <input
        className='search'
        placeholder='検索'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;
