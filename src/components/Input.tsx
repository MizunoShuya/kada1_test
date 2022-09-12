import React from 'react';
import '../styles/Input.css';

//検索ボックス
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
