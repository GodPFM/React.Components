import React from 'react';
import Button from '../UI/button/Button';
import classes from './CardAdded.module.css';

interface IProps {
  closeModal: () => void;
}

const CardAdded = (props: IProps) => {
  return (
    <div className={classes.message__container}>
      <p>Card Successfully added</p>
      <Button text={'OK'} onClck={props.closeModal} />
    </div>
  );
};

export default CardAdded;
