import React, { FC } from 'react';
import cl from './styles/flightExtendedOffer.module.scss';
import SectionHead from './SectionHead';
import FilledButton from './UI/FilledButton';

interface IFlightExtendedOfferProps {
  title: string;
  description: string;
  startPrice: string;
  images: string[];
}

const FlightExtendedOffer: FC<IFlightExtendedOfferProps> = ({
  images,
  description,
  startPrice,
  title,
}) => {
  return (
    <section className={cl.offer}>
      <SectionHead
        title={'Fall into travel'}
        description={
          'Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.'
        }
        buttonText={'See All'}
      />
      <div className={cl.container}>
        <div className={cl.description}>
          <div className={cl.head}>
            <h3>{title}</h3>
            <div>
              <span>From:</span>
              <span>{'$' + startPrice}</span>
            </div>
          </div>
          <p>{description}</p>
          <FilledButton
            text={'Book Flight'}
            clickHandler={() => console.log('click')}
            isWhite={true}
            fillWidth={true}
          />
        </div>
        <div className={cl.images}>
          {images.map((image, i) =>
            i < 4 ? <img key={i} src={image} alt={title} /> : null
          )}
        </div>
      </div>
    </section>
  );
};

export default FlightExtendedOffer;
