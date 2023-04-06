import React from 'react';
import cl from './styles/homePage.module.scss';
import Footer from '../components/Footer';
import HomeWelcome from '../components/HomeWelcome';

const HomePage = () => {
  return (
    <>
      <div className={cl.home}>
        <HomeWelcome />
        <main className={cl.main}></main>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
