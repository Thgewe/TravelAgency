import React, { FC } from 'react';
import cl from './styles/homePopularCard.module.scss';

interface IHomePopularCardProps {
  image: string;
  name: string;
}

// TODO - link

const HomePopularCard: FC<IHomePopularCardProps> = ({ image, name }) => {
  return (
    <div className={cl.card}>
      <img className={cl.image} alt={name} src={image} />
      <div className={cl.info}>
        <h4>{name}</h4>
        <div>
          <span>Flights</span>
          <span>Hotels</span>
          <span>Resorts</span>
        </div>
      </div>
    </div>
  );
};

export default HomePopularCard;
