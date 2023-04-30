import React from 'react';
import classes from './UserCard.module.css';
import { CardWithUsers } from '../../../types/CardWithUsers';

interface IProps {
  card: CardWithUsers;
}

const UserCard = (props: IProps) => {
  return (
    <div className={classes.item} data-testid="cardAdded">
      <img className={classes.item__image} src={props.card.image} alt="Product image" />
      <h2 className={classes.item__title}>{props.card.name}</h2>
      <p>Birthday: {props.card.date}</p>
      <p>Profession: {props.card.profession}</p>
      <p>Sex: {props.card.sex}</p>
      <p>Accepted terms</p>
      {props.card.agreeGetNotification && (
        <p data-testid="notifAgree">Agree to get notifications</p>
      )}
    </div>
  );
};

export default UserCard;
