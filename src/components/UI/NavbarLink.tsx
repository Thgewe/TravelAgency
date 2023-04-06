import React, { FC, SVGProps } from 'react';
import cl from './style/navbarLink.module.scss';
import { NavLink } from 'react-router-dom';

interface IIconLinkProps {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  to: string;
  isWhite?: boolean;
}

const NavbarLink: FC<IIconLinkProps> = ({ text, Icon, to, isWhite }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive ? cl.link + ' ' + cl.active : cl.link) +
        (isWhite ? ' ' + cl.white : '')
      }
    >
      <Icon />
      {text}
    </NavLink>
  );
};

export default NavbarLink;
