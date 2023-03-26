import React, { Component } from 'react';
import ProductItem from '../UI/productItem/ProductItem';
import { CardWithUsers } from '../../types/CardWithUsers';
import UserCard from '../UI/UserCard/UserCard';

interface IProps {
  cards: CardWithUsers[];
}

class CardsWithUsers extends Component<IProps> {
  render() {
    return (
      <div className="items__container">
        {this.props.cards.map((item, index) => (
          <UserCard card={item} key={index} />
        ))}
      </div>
    );
  }
}

export default CardsWithUsers;
