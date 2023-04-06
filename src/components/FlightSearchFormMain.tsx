import React, { FC, useState } from 'react';
import cl from './styles/searchFormMain.module.scss';
import LabeledInput from './UI/LabeledInput';
import { ReactComponent as Swap } from '../images/svg/icons/swap-horizontal.svg';
import { ReactComponent as PaperPlane } from '../images/svg/icons/Paper Plane-True.svg';
import FilledButton from './UI/FilledButton';

interface IFlightSearchFormMainProps {
  title?: string;
  noBackground?: boolean;
}

// TODO - replace inputs with select

const FlightSearchFormMain: FC<IFlightSearchFormMainProps> = ({
  title,
  noBackground,
}) => {
  const [fromTo, setFromTo] = useState<string>('');
  const [trip, setTrip] = useState<string>('');
  const [departReturn, setDepartReturn] = useState<string>('');
  const [passengerClass, setPassengerClass] = useState<string>('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (fromTo && trip && departReturn && passengerClass) {
      console.log('submit');
    } else {
      console.log('empty inputs kiken da');
    }
  };

  return (
    <form className={cl.form + (noBackground ? ' ' + cl.transparent : '')}>
      {title && <h3 className={cl.title}>{title}</h3>}
      <div className={cl.inputs + ' ' + cl.flight}>
        <LabeledInput
          name={'flight'}
          id={'flight0'}
          label={'From - To'}
          setValue={setFromTo}
          value={fromTo}
          Icon={Swap}
          iconRight={true}
          placeholder={'Lahore - Karachi'}
        />
        <LabeledInput
          name={'flight'}
          id={'flight1'}
          label={'Trip'}
          setValue={setTrip}
          value={trip}
          placeholder={'Return'}
        />
        <LabeledInput
          name={'flight'}
          id={'flight2'}
          label={'Depart - Return'}
          setValue={setDepartReturn}
          value={departReturn}
          placeholder={'07 Nov 22 - 13 Nov 22'}
        />
        <LabeledInput
          name={'flight'}
          id={'flight3'}
          label={'Passenger - Class'}
          setValue={setPassengerClass}
          value={passengerClass}
          placeholder={'1 Passenger, Economy'}
        />
      </div>
      <FilledButton
        text={'Show Flights'}
        clickHandler={submitHandler}
        type={'submit'}
        isLight={true}
        Icon={PaperPlane}
      />
    </form>
  );
};

export default FlightSearchFormMain;
