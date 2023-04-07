import React, { useRef } from 'react';
import cl from './styles/homeReviews.module.scss';
import SectionHead from './SectionHead';
import HomeReviewsCard from './HomeReviewsCard';
import kaiTak from '../images/png/ReviewsKaiTak.png';
import olympic from '../images/png/ReviewsOlympic.png';
import kaiTakIcaCave from '../images/png/ReviewsKaiTakIceCave.png';

const HomeReviews = () => {
  const section = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: 1,
      title: '“A real sense of community, nurtured”',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
      name: 'Olga',
      place: 'Weave Studios - Kai Tak',
      rate: 3.5,
      image: kaiTak,
    },
    {
      id: 2,
      title: '“The facilities are superb. Clean, slick, bright.”',
      text: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
      name: 'Olga',
      place: 'Weave Studios - Kai Tak',
      rate: 1.5,
      image: olympic,
    },
    {
      id: 3,
      title: '“A real sense of community, nurtured”',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
      name: 'Olga',
      place: 'Weave Studios - Kai Tak',
      rate: 3.3,
      image: kaiTakIcaCave,
    },
    {
      id: 4,
      title: '“A real sense of community, nurtured”',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
      name: 'Olga',
      place: 'Weave Studios - Kai Tak',
      rate: 5,
      image: olympic,
    },
    {
      id: 5,
      title: '“A real sense of community, nurtured”',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
      name: 'Olga',
      place: 'Weave Studios - Kai Tak',
      rate: 5,
      image: kaiTak,
    },
  ];

  let scroll = 0;
  const cardsWidth = (424 + 48) * cards.length - 48;

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add(cl.drag);
  };

  const mouseUpHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove(cl.drag);
  };
  const mouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove(cl.drag);
  };

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains(cl.drag)) {
      if (e.movementX > 0 && scroll < 0) {
        scroll += 2;
      } else if (
        e.movementX < 0 &&
        scroll >
          (section.current ? section.current.clientWidth : 0) - cardsWidth
      ) {
        scroll -= 2;
      }

      if (scroll > 0) {
        scroll = 0;
      } else if (
        scroll <
        (section.current ? section.current.clientWidth : 0) - cardsWidth
      ) {
        scroll =
          (section.current ? section.current.clientWidth : 0) - cardsWidth;
      }

      e.currentTarget.style.transform = 'translateX(' + scroll + 'px)';
    }
  };

  return (
    <section className={cl.reviews} ref={section}>
      <SectionHead
        title={'Reviews'}
        description={'What people says about Golobe facilities'}
        buttonText={'See All'}
      />
      <div
        className={cl.cards}
        style={{ width: cardsWidth }}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
      >
        {cards.map((card) => (
          <HomeReviewsCard
            key={card.id}
            title={card.title}
            text={card.text}
            name={card.name}
            place={card.place}
            rate={card.rate}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeReviews;
