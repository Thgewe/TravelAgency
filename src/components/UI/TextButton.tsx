import React, { FC } from 'react';
import cl from './style/textButton.module.scss';

interface ITextButtonProps {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isWhite?: boolean;
}

const TextButton: FC<ITextButtonProps> = ({
  text,
  clickHandler,
  disabled,
  isWhite,
}) => {
  return (
    <button
      className={cl.button + (isWhite ? ' ' + cl.white : '')}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default TextButton;
