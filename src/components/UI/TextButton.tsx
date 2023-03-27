import React, { FC } from 'react';
import cl from './style/textButton.module.scss';

interface ITextButtonProps {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const TextButton: FC<ITextButtonProps> = ({ text, clickHandler, disabled }) => {
  return (
    <button className={cl.button} onClick={clickHandler} disabled={disabled}>
      {text}
    </button>
  );
};

export default TextButton;
