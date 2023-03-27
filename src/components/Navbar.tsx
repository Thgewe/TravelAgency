import React from 'react';
import cl from './styles/navbar.module.scss';
import IconLink from './UI/NavbarLink';
import { ReactComponent as Stays } from '../images/svg/icons/ion_bed.svg';
import { ReactComponent as Flight } from '../images/svg/icons/airplane-True.svg';
import { ReactComponent as Heart } from '../images/svg/icons/heart-True.svg';
import { ReactComponent as Logo } from '../images/svg/logo.svg';
import FilledButton from './UI/FilledButton';
import TextButton from './UI/TextButton';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FAVOURITES_ROUTE,
  FLIGHT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  STAYS_ROUTE,
} from '../utils/constants';
import NavbarLink from './UI/NavbarLink';
import UserDropdown from './UserDropdown';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../store/slices/userSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.UserSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={cl.navbar}>
      <div className={cl.links}>
        <IconLink text={'Find Flight'} Icon={Flight} to={FLIGHT_ROUTE} />
        <IconLink text={'Find Stays'} Icon={Stays} to={STAYS_ROUTE} />
      </div>
      <NavLink to={HOME_ROUTE} className={cl.logo}>
        <Logo />
      </NavLink>
      {user ? (
        <div className={cl.links}>
          <NavbarLink text={'Favourites'} Icon={Heart} to={FAVOURITES_ROUTE} />
          <UserDropdown />
        </div>
      ) : (
        <div className={cl.links}>
          <TextButton
            text={'Login'}
            clickHandler={() =>
              dispatch(login({ id: 1, name: 'John D.', avatar: 'asd' }))
            }
          />
          <FilledButton
            text={'Sign up'}
            clickHandler={() => navigate(SIGNUP_ROUTE)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
