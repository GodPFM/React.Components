import React, { Component } from 'react';
import { CardWithUsers } from '../../types/CardWithUsers';
import UserCard from '../UI/UserCard/UserCard';
import classes from './CardsWithUsers.module.css';

interface IProps {
  cards: CardWithUsers[];
}

class CardsWithUsers extends Component<IProps> {
  render() {
    return (
      <div className={classes.cards__container}>
        {this.props.cards.map((item, index) => (
          <UserCard card={item} key={index} />
        ))}
      </div>
    );
  }
}

export default CardsWithUsers;
