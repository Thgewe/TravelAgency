import React, { FC, SVGProps } from 'react';
import cl from './styles/homePopularBottomNavCard.module.scss';
import FilledButton from './UI/FilledButton';
import { useNavigate } from 'react-router-dom';

interface IHomePopularBottomNavCardProps {
  image: string;
  name: string;
  description: string;
  ButtonIcon: FC<SVGProps<SVGSVGElement>>;
  navigateTo: string;
  buttonText: string;
}

const HomePopularBottomNavCard: FC<IHomePopularBottomNavCardProps> = ({
  image,
  name,
  description,
  ButtonIcon,
  navigateTo,
  buttonText,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={cl.block}
      style={{
        background: `linear-gradient(rgba(17, 34, 17, 0) 40%,
          rgba(17, 17, 17, .9)), url(${image}) center / cover no-repeat`,
      }}
    >
      <div className={cl.title}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <FilledButton
        text={buttonText}
        clickHandler={() => navigate(navigateTo)}
        Icon={ButtonIcon}
        isLight={true}
      />
    </div>
  );
};

export default HomePopularBottomNavCard;
