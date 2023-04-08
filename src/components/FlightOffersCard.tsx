import React, { FC } from 'react';
import cl from './styles/flightOffersCard.module.scss';
import FilledButton from './UI/FilledButton';

interface IFlightOffersCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const FlightOffersCard: FC<IFlightOffersCardProps> = ({
  price,
  image,
  description,
  title,
}) => {
  return (
    <div
      className={cl.card}
      style={{ background: `url(${image}) center / cover no-repeat` }}
    >
      <div className={cl.main}>
        <div className={cl.text}>
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{'$ ' + price}</span>
        </div>
        <FilledButton
          text={'Book Flight'}
          clickHandler={() => console.log('click')}
          isLight={true}
          fillWidth={true}
        />
      </div>
    </div>
  );
};

export default FlightOffersCard;
