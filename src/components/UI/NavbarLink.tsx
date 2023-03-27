import React, { FC, SVGProps } from 'react';
import cl from './style/lconLink.module.scss';
import { NavLink } from 'react-router-dom';

interface IIconLinkProps {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  to: string;
}

const NavbarLink: FC<IIconLinkProps> = ({ text, Icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? cl.link + ' ' + cl.active : cl.link
      }
    >
      <Icon />
      {text}
    </NavLink>
  );
};

export default NavbarLink;
