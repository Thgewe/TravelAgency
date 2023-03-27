import React from 'react';
import cl from './styles/linkGrid.module.scss';
import LinkList from './UI/LinkList';

const LinkGrid = () => {
  return (
    <div className={cl.grid}>
      <LinkList
        name={'Our Destination'}
        links={[
          { name: 'Canada', to: '#' },
          { name: 'Alaska', to: '#' },
          { name: 'France', to: '#' },
          { name: 'Iceland', to: '#' },
        ]}
      />
      <LinkList
        name={'Our Activities'}
        links={[
          { name: 'Northern Lights', to: '#' },
          { name: 'Cruising & sailing', to: '#' },
          { name: 'Multi-activities', to: '#' },
          { name: 'Kayaing', to: '#' },
        ]}
      />
      <LinkList
        name={'Travel Blogs'}
        links={[
          { name: 'Bali Travel Guide', to: '#' },
          { name: 'Sri Lanks Travel Guide', to: '#' },
          { name: 'Peru Travel Guide', to: '#' },
        ]}
      />
      <LinkList
        name={'About Us'}
        links={[
          { name: 'Our Story', to: '#' },
          { name: 'Work with us', to: '#' },
        ]}
      />
      <LinkList
        name={'Contact Us'}
        links={[
          { name: 'Our Story', to: '#' },
          { name: 'Work with us', to: '#' },
        ]}
      />
    </div>
  );
};

export default LinkGrid;
