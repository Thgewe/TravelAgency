import React, { FC, useState } from 'react';
import cl from './styles/mainSearchForm.module.scss';
import FlightSearchFormMain from './FlightSearchFormMain';
import StaysSearchFormMain from './StaysSearchFormMain';
import IconText from './UI/IconText';
import { ReactComponent as Plane } from '../images/svg/icons/airplane-True.svg';
import { ReactComponent as Bed } from '../images/svg/icons/ion_bed.svg';

const MainSearchForm: FC = () => {
  const [isFlight, setIsFlight] = useState<boolean>(true);

  return (
    <div className={cl.form}>
      <div className={cl.navigation}>
        <div
          className={isFlight ? cl.active : ''}
          onClick={() => setIsFlight(true)}
        >
          <IconText Icon={Plane} text={'Flights'} />
        </div>
        <span></span>
        <div
          className={isFlight ? '' : cl.active}
          onClick={() => setIsFlight(false)}
        >
          <IconText Icon={Bed} text={'Stays'} />
        </div>
      </div>
      {isFlight ? (
        <FlightSearchFormMain noBackground={true} />
      ) : (
        <StaysSearchFormMain noBackground={true} />
      )}
    </div>
  );
};

export default MainSearchForm;
