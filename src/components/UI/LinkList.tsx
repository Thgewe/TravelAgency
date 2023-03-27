import React, { FC } from 'react';
import cl from './style/linkList.module.scss';

interface ILinkListProps {
  name: string;
  links: { name: string; to: string }[];
}

const LinkList: FC<ILinkListProps> = ({ links, name }) => {
  return (
    <ul className={cl.list}>
      <li>{name}</li>
      {links.map((link) => (
        <li key={link.name + link.to + name}>
          <a href={link.to}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
