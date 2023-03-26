import React, { Component } from 'react';
import classes from './UserCard.module.css';
import { CardWithUsers } from '../../../types/CardWithUsers';

interface IProps {
  card: CardWithUsers;
}
class UserCard extends Component<IProps> {
  render() {
    return (
      <div className={classes.item}>
        <img className={classes.item__image} src={this.props.card.image} alt="Product image" />
        <h2 className={classes.item__title}>{this.props.card.name}</h2>
        <p>Birthday: {this.props.card.date}</p>
        <p>Profession: {this.props.card.profession}</p>
        <p>Sex: {this.props.card.sex}</p>
        <p>Accepted terms</p>
        {this.props.card.agreeGetNotification && <p>Agree to get notifications</p>}
      </div>
    );
  }
}

export default UserCard;
