import React, { FC } from 'react';
import cl from './style/rateBar.module.scss';
import { ReactComponent as Star } from '../../images/svg/icons/rate_star.svg';
import { ReactComponent as StarGray } from '../../images/svg/icons/rate_star_gray.svg';

interface IRateBarProps {
  rate: number;
}

const RateBar: FC<IRateBarProps> = ({ rate }) => {
  return (
    <div className={cl.rate}>
      <div className={cl.inactive}>
        <StarGray />
        <StarGray />
        <StarGray />
        <StarGray />
        <StarGray />
      </div>
      <div
        className={cl.active}
        style={{ width: rate * 24 + Math.ceil(rate - 1) * 12 }}
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
};

export default RateBar;
