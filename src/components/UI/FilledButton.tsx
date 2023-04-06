import React, { FC, SVGProps } from 'react';
import cl from './style/filledButton.module.scss';

interface IFilledButtonProps {
  text: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLight?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  Icon?: FC<SVGProps<SVGSVGElement>>;
  isWhite?: boolean;
}

const FilledButton: FC<IFilledButtonProps> = ({
  text,
  isLight,
  clickHandler,
  fillWidth,
  disabled,
  fillHeight,
  type,
  Icon,
  isWhite,
}) => {
  return (
    <button
      className={
        cl.button +
        (isLight ? ' ' + cl.light : '') +
        (fillWidth ? ' ' + cl.width : '') +
        (fillHeight ? ' ' + cl.height : '') +
        (Icon ? ' ' + cl.icon : '') +
        (isWhite ? ' ' + cl.white : '')
      }
      onClick={clickHandler}
      disabled={disabled}
      type={type}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default FilledButton;
