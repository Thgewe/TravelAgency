import React, { FC } from 'react';
import cl from './styles/layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={cl.main}>
        <div className={cl.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
