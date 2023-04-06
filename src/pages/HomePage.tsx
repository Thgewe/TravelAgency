import React from 'react';
import cl from './styles/homePage.module.scss';
import Footer from '../components/Footer';
import HomeWelcome from '../components/HomeWelcome';
import HomePopular from '../components/HomePopular';

const HomePage = () => {
  return (
    <>
      <div className={cl.home}>
        <HomeWelcome />
        <main className={cl.main}>
          <HomePopular />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
