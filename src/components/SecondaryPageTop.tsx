import React, { FC } from 'react';
import cl from './styles/secondaryPageTop.module.scss';
import FlightSearchFormMain from './FlightSearchFormMain';

interface ISecondaryPageTopProps {
  image: string;
  title: string;
  text: string;
}

const SecondaryPageTop: FC<ISecondaryPageTopProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <section
      className={cl.top}
      style={{
        background:
          'linear-gradient(to right, rgba(0, 35, 77, .62) 5%, rgba(0, 35, 77, 0)), ' +
          `url(${image}) center / cover no-repeat`,
      }}
    >
      <div className={cl.container}>
        <div className={cl.text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
      <div className={cl.form}>
        <FlightSearchFormMain title={'Where are you flying?'} />
      </div>
    </section>
  );
};

export default SecondaryPageTop;
