import React from 'react';

import Header from './Header';
import '../styles/Layout.css';

// @ts-ignore
const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
