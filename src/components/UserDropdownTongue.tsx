import React, { FC } from 'react';
import cl from './styles/userDropdownTongue.module.scss';
import { ReactComponent as User } from '../images/svg/icons/User-True.svg';
import { ReactComponent as Card } from '../images/svg/icons/card-True.svg';
import { ReactComponent as Settings } from '../images/svg/icons/settings-True.svg';
import { ReactComponent as Support } from '../images/svg/icons/Support-True.svg';
import { ReactComponent as Logout } from '../images/svg/icons/Logout-True.svg';
import { ReactComponent as Chevron } from '../images/svg/icons/chevron-left.svg';
import image from '../images/png/main-top.png';
import IconText from './UI/IconText';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { logout } from '../store/slices/userSlice';

interface IUserDropdown {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDropdownTongue: FC<IUserDropdown> = ({ isActive, setIsActive }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={cl.drop + (isActive ? ' ' + cl.active : '')}
      onMouseLeave={() => setIsActive(false)}
      onClick={(e) =>
        (e.target as HTMLElement).closest('.' + cl.link)
          ? setIsActive(false)
          : null
      }
    >
      <div className={cl.top}>
        <img src={image} alt="avatar" />
        <span>John Doe.</span>
      </div>
      <div className={cl.mid}>
        <Link to={'/home'} className={cl.link}>
          <IconText text={'My account'} Icon={User} />
          <Chevron className={cl.chevron} />
        </Link>
        <Link to={'/home'} className={cl.link}>
          <IconText text={'Payments'} Icon={Card} />
          <Chevron className={cl.chevron} />
        </Link>
        <Link to={'/home'} className={cl.link}>
          <IconText text={'Settings'} Icon={Settings} />
          <Chevron className={cl.chevron} />
        </Link>
      </div>
      <div className={cl.bot}>
        <Link to={'/home'} className={cl.link}>
          <IconText text={'Support'} Icon={Support} />
          <Chevron className={cl.chevron} />
        </Link>
        <div className={cl.logout} onClick={() => dispatch(logout())}>
          <IconText text={'Logout'} Icon={Logout} />
        </div>
      </div>
    </div>
  );
};

export default UserDropdownTongue;
