import React from 'react';
import cl from './styles/flightMap.module.scss';
import SectionHead from './SectionHead';

const FlightMap = () => {
  return (
    <section className={cl.map}>
      <div className={cl.head}>
        <SectionHead
          title={'Let`s go places together'}
          description={
            'Discover the latest offers and news and start planning your next trip with us.'
          }
          buttonText={'See All'}
        />
      </div>
      <div className={cl.image}></div>
    </section>
  );
};

export default FlightMap;
