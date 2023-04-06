import React, { FC, memo, useState } from 'react';
import cl from './styles/searchFormMain.module.scss';
import LabeledInput from './UI/LabeledInput';
import FilledButton from './UI/FilledButton';
import { ReactComponent as Bed } from '../images/svg/icons/ion_bed.svg';
import { ReactComponent as Calendar } from '../images/svg/icons/calendar-True.svg';
import { ReactComponent as User } from '../images/svg/icons/User-True.svg';
import { ReactComponent as Building } from '../images/svg/icons/building-True.svg';

interface IStaysSearchFormMainProps {
  title?: string;
  noBackground?: boolean;
}

/* TODO - replace inputs with select
        - replace regular inputs with calendar ones
 */

const StaysSearchFormMain: FC<IStaysSearchFormMainProps> = ({
  title,
  noBackground,
}) => {
  const [enterDestination, setEnterDestination] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [roomsAndGuests, setRoomAndGuests] = useState<string>('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (enterDestination && checkIn && checkOut && roomsAndGuests) {
      console.log('submit');
    } else {
      console.log('empty inputs kiken da');
    }
  };

  return (
    <form className={cl.form + (noBackground ? ' ' + cl.transparent : '')}>
      {title && <h3 className={cl.title}>{title}</h3>}
      <div className={cl.inputs + ' ' + cl.stays}>
        <LabeledInput
          name={'stays'}
          id={'stays0'}
          label={'Enter Destination'}
          setValue={setEnterDestination}
          value={enterDestination}
          Icon={Bed}
          placeholder={'Istanbul, Turkey'}
        />
        <LabeledInput
          name={'stays'}
          id={'stays1'}
          label={'Check In'}
          setValue={setCheckIn}
          value={checkIn}
          Icon={Calendar}
          iconRight={true}
          placeholder={'Fri 12/2'}
        />
        <LabeledInput
          name={'stays'}
          id={'stays2'}
          label={'Check Out'}
          setValue={setCheckOut}
          value={checkOut}
          Icon={Calendar}
          iconRight={true}
          placeholder={'Sun 12/4'}
        />
        <LabeledInput
          name={'stays'}
          id={'stays3'}
          label={'Rooms & Guests'}
          setValue={setRoomAndGuests}
          value={roomsAndGuests}
          Icon={User}
          placeholder={'1 room, 2 guests'}
        />
      </div>
      <FilledButton
        text={'Show Places'}
        clickHandler={submitHandler}
        type={'submit'}
        isLight={true}
        Icon={Building}
      />
    </form>
  );
};

export default memo(StaysSearchFormMain);
