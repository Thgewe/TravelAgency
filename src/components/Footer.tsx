import React from 'react';
import cl from './styles/footer.module.scss';
import Subscribe from './Subscribe';
import LinkGrid from './LinkGrid';
import { ReactComponent as Logo } from '../images/svg/logo-inverted.svg';
import { ReactComponent as Facebook } from '../images/svg/social/facebook.svg';
import { ReactComponent as Twitter } from '../images/svg/social/twitter.svg';
import { ReactComponent as Youtube } from '../images/svg/social/youtube.svg';
import { ReactComponent as Instagram } from '../images/svg/social/instagram.svg';
import { HOME_ROUTE } from '../utils/constants';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.container}>
        <div className={cl.subscribe}>
          <Subscribe />
        </div>
        <div className={cl.social}>
          <a href={HOME_ROUTE}>
            <Logo />
          </a>
          <div>
            <a href={'#'}>
              <Facebook />
            </a>
            <a href={'#'}>
              <Twitter />
            </a>
            <a href={'#'}>
              <Youtube />
            </a>
            <a href={'#'}>
              <Instagram />
            </a>
          </div>
        </div>
        <LinkGrid />
      </div>
    </footer>
  );
};

export default Footer;
