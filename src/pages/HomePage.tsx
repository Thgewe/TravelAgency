import React from 'react';
import cl from './styles/homePage.module.scss';
import Footer from '../components/Footer';
import HomeWelcome from '../components/HomeWelcome';
import HomePopular from '../components/HomePopular';
import HomeReviews from '../components/HomeReviews';

// TODO: navigation

const HomePage = () => {
  return (
    <>
      <div className={cl.home}>
        <HomeWelcome />
        <main className={cl.main}>
          <HomePopular />
          <HomeReviews />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
