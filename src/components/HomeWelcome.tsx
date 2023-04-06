import React from 'react';
import cl from './styles/homeWelcom.module.scss';
import Navbar from './Navbar';
import MainSearchForm from './MainSearchForm';

const HomeWelcome = () => {
  return (
    <section className={cl.welcome}>
      <header>
        <Navbar isMain={true} />
      </header>
      <h1 className={cl.title}>
        <span>Helping Others</span>
        <span>Live & Travel</span>
        <span>Special offers to suit your plan</span>
      </h1>
      <div className={cl.form}>
        <MainSearchForm />
      </div>
    </section>
  );
};

export default HomeWelcome;
