import React, { FC, useState } from 'react';
import cl from './styles/userDropdown.module.scss';
import image from '../images/png/main-top.png';
import UserDropdownTongue from './UserDropdownTongue';

interface IUserDropdownProps {
  isWhite?: boolean;
}

const UserDropdown: FC<IUserDropdownProps> = ({ isWhite }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={cl.dropdown}>
      <div
        className={cl.button + (isWhite ? ' ' + cl.white : '')}
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
      >
        <img src={image} alt="avatar" />
        <div>John D.</div>
      </div>
      <div className={cl.drop}>
        <UserDropdownTongue isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
};

export default UserDropdown;
