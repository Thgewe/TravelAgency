import React from 'react';
import cl from './styles/subscribe.module.scss';
import { ReactComponent as MailBox } from '../images/svg/mailbox.svg';
import SubscribeForm from './SubscribeForm';

const Subscribe = () => {
  return (
    <div className={cl.subscribe}>
      <SubscribeForm />
      <MailBox />
    </div>
  );
};

export default Subscribe;
