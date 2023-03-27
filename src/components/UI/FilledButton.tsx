import React, { FC } from 'react';
import cl from './style/filledButton.module.scss';

interface IFilledButtonProps {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLight?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const FilledButton: FC<IFilledButtonProps> = ({
  text,
  isLight,
  clickHandler,
  fillWidth,
  disabled,
  fillHeight,
  type,
}) => {
  return (
    <button
      className={
        cl.button +
        (isLight ? ' ' + cl.light : '') +
        (fillWidth ? ' ' + cl.width : '') +
        (fillHeight ? ' ' + cl.height : '')
      }
      onClick={clickHandler}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default FilledButton;
