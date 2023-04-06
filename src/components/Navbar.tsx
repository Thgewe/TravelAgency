import React, { FC } from 'react';
import cl from './styles/navbar.module.scss';
import { ReactComponent as Stays } from '../images/svg/icons/ion_bed.svg';
import { ReactComponent as Flight } from '../images/svg/icons/airplane-True.svg';
import { ReactComponent as Heart } from '../images/svg/icons/heart-True.svg';
import { ReactComponent as Logo } from '../images/svg/logo.svg';
import { ReactComponent as LogoLight } from '../images/svg/logo-light.svg';
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

interface INavbarProps {
  isMain?: boolean;
}

const Navbar: FC<INavbarProps> = ({ isMain }) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.UserSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={cl.navbar + (isMain ? ' ' + cl.main : '')}>
      <div className={cl.links}>
        <NavbarLink
          text={'Find Flight'}
          Icon={Flight}
          to={FLIGHT_ROUTE}
          isWhite={isMain}
        />
        <NavbarLink
          text={'Find Stays'}
          Icon={Stays}
          to={STAYS_ROUTE}
          isWhite={isMain}
        />
      </div>
      <NavLink to={HOME_ROUTE} className={cl.logo}>
        {isMain ? <LogoLight /> : <Logo />}
      </NavLink>
      {user ? (
        <div className={cl.links}>
          <NavbarLink
            text={'Favourites'}
            Icon={Heart}
            to={FAVOURITES_ROUTE}
            isWhite={isMain}
          />
          <UserDropdown isWhite={isMain} />
        </div>
      ) : (
        <div className={cl.links}>
          <TextButton
            text={'Login'}
            clickHandler={() =>
              dispatch(login({ id: 1, name: 'John D.', avatar: 'asd' }))
            }
            isWhite={isMain}
          />
          <FilledButton
            text={'Sign up'}
            clickHandler={() => navigate(SIGNUP_ROUTE)}
            isWhite={isMain}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
