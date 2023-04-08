import React from 'react';
import cl from './styles/flightOffers.module.scss';
import SectionHead from './SectionHead';
import paris from '../images/png/ParisOffer.png';
import melbourne from '../images/png/MelbourneOffer.png';
import london from '../images/png/LondonOffer.png';
import columbia from '../images/png/ColumbiaOffer.png';
import FlightOffersCard from './FlightOffersCard';

// TODO: move cards to storage

const FlightOffers = () => {
  const cards = [
    {
      id: 1,
      image: melbourne,
      title: 'Melbourne',
      description: 'An amazing journey',
      price: '700',
    },
    {
      id: 2,
      image: paris,
      title: 'Paris',
      description: 'A Paris Adventure',
      price: '600',
    },
    {
      id: 3,
      image: london,
      title: 'London',
      description: 'London eye adventure',
      price: '350',
    },
    {
      id: 4,
      image: columbia,
      title: 'Columbia',
      description: 'Amazing streets',
      price: '700',
    },
  ];

  return (
    <section className={cl.offers}>
      <SectionHead
        title={'Fall into travel'}
        description={
          'Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.'
        }
        buttonText={'See All'}
      />
      <div className={cl.grid}>
        {cards.map((card) => (
          <FlightOffersCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FlightOffers;
