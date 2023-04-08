import React from 'react';
import SecondaryPageTop from '../components/SecondaryPageTop';
import topImage from '../images/png/flightMain.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlightMap from '../components/FlightMap';
import cl from './styles/flightPage.module.scss';
import FlightOffers from '../components/FlightOffers';
import FlightExtendedOffer from '../components/FlightExtendedOffer';
import shriLankaOffer1 from '../images/png/ShriLankaOffer1.png';
import shriLankaOffer2 from '../images/png/ShriLankaOffer2.png';
import shriLankaOffer3 from '../images/png/ShriLankaOffer3.png';
import shriLankaOffer4 from '../images/png/ShriLankaOffer4.png';

// TODO: - move offer to storage
//       - navigation

const FlightPage = () => {
  const offer = {
    title: 'Backpacking Sri Lanka',
    description:
      'Traveling is a unique experience as it`s the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.',
    startPrice: '700',
    images: [
      shriLankaOffer1,
      shriLankaOffer2,
      shriLankaOffer3,
      shriLankaOffer4,
    ],
  };

  return (
    <>
      <Header />
      <SecondaryPageTop
        image={topImage}
        title={'Make your travel whishlist, we’ll do the rest'}
        text={'Special offers to suit your plan'}
      />
      <FlightMap />
      <div className={cl.container}>
        <FlightOffers />
        <FlightExtendedOffer
          title={offer.title}
          description={offer.description}
          images={offer.images}
          startPrice={offer.startPrice}
        />
      </div>
      <Footer />
    </>
  );
};

export default FlightPage;
