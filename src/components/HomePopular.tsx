import React from 'react';
import cl from './styles/homePopular.module.scss';
import HomePopularCard from './HomePopularCard';
import istanbul from '../images/png/Istanbul.png';
import sydney from '../images/png/Sydney.png';
import baku from '../images/png/Baku.png';
import male from '../images/png/Male.png';
import dubai from '../images/png/Dubai.png';
import london from '../images/png/London.png';
import newYork from '../images/png/NewYork.png';
import paris from '../images/png/Paris.png';
import tokyo from '../images/png/Tokyo.png';
import BorderedButton from './UI/BorderedButton';

const HomePopular = () => {
  const cities = [
    {
      id: 1,
      name: 'Istanbul, Turkey',
      image: istanbul,
    },
    {
      id: 2,
      name: 'Sydney, Australia',
      image: sydney,
    },
    {
      id: 3,
      name: 'Baku, Azerbaijan',
      image: baku,
    },
    {
      id: 4,
      name: 'Malé, Maldives',
      image: male,
    },
    {
      id: 5,
      name: 'Paris, France',
      image: paris,
    },
    {
      id: 6,
      name: 'New York, US',
      image: newYork,
    },
    {
      id: 7,
      name: 'London, UK',
      image: london,
    },
    {
      id: 8,
      name: 'Tokyo, Japan',
      image: tokyo,
    },
    {
      id: 9,
      name: 'Dubai, UAE',
      image: dubai,
    },
  ];

  return (
    <section className={cl.popular}>
      <div className={cl.head}>
        <div className={cl.text}>
          <h2>Plan your perfect trip</h2>
          <p>Search Flights & Places Hire to our most popular destinations</p>
        </div>
        <BorderedButton
          text={'See more places'}
          clickHandler={() => console.log('click')}
        />
      </div>
      <div className={cl.grid}>
        {cities.map((city) => (
          <HomePopularCard key={city.id} image={city.image} name={city.name} />
        ))}
      </div>
    </section>
  );
};

export default HomePopular;
