import React from 'react';
import cl from './styles/header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
