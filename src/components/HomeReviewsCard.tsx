import React, { FC } from 'react';
import cl from './styles/homeReviewsCard.module.scss';
import { ReactComponent as Google } from '../images/svg/social/google.svg';
import RateBar from './UI/RateBar';
import IconText from './UI/IconText';

interface IHomeReviewsCardProps {
  title: string;
  text: string;
  name: string;
  place: string;
  rate: number;
  image: string;
}

const HomeReviewsCard: FC<IHomeReviewsCardProps> = ({
  text,
  title,
  place,
  name,
  rate,
  image,
}) => {
  return (
    <div className={cl.card}>
      <div className={cl.preview}>
        <h4>{title}</h4>
        <p>{text}</p>
        <span onClick={() => alert('Reviews are currently unavailable')}>
          View more
        </span>
      </div>
      <div className={cl.info}>
        <RateBar rate={rate} />
        <h5>{name}</h5>
        <p>{place}</p>
        <IconText Icon={Google} text={'Google'} />
      </div>
      <img src={image} alt={place} draggable={false} />
    </div>
  );
};

export default HomeReviewsCard;
