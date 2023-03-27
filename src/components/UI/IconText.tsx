import React, { FC, memo, SVGProps } from 'react';
import cl from './style/iconText.module.scss';

interface IIconTextProps {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const IconText: FC<IIconTextProps> = ({ text, Icon }) => {
  return (
    <div className={cl.text}>
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default memo(IconText);
