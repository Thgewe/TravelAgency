import React, { FC } from 'react';
import cl from './style/borderedButton.module.scss';

interface IBorderedButtonProps {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BorderedButton: FC<IBorderedButtonProps> = ({ text, clickHandler }) => {
  return (
    <button className={cl.button} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default BorderedButton;
