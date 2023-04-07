import React, { FC } from 'react';
import cl from './styles/sectionHead.module.scss';
import BorderedButton from './UI/BorderedButton';

interface ISectionHeadProps {
  title: string;
  description: string;
  buttonText: string;
}

const SectionHead: FC<ISectionHeadProps> = ({
  title,
  buttonText,
  description,
}) => {
  return (
    <div className={cl.head}>
      <div className={cl.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <BorderedButton
        text={buttonText}
        clickHandler={() => console.log('click')}
      />
    </div>
  );
};

export default SectionHead;
