import React from 'react';
import { CardWithUsers } from '../../types/CardWithUsers';
import UserCard from '../UI/UserCard/UserCard';
import classes from './CardsWithUsers.module.css';

interface IProps {
  cards: CardWithUsers[];
}

const CardsWithUsers = (props: IProps) => {
  return (
    <div className={classes.cards__container}>
      {props.cards.map((item, index) => (
        <UserCard card={item} key={index} />
      ))}
    </div>
  );
};

export default CardsWithUsers;
