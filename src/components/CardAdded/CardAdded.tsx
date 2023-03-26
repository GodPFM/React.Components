import React, { Component } from 'react';
import Button from '../UI/button/Button';
import classes from './CardAdded.module.css';

interface IProps {
  closeModal: () => void;
}

class CardAdded extends Component<IProps> {
  render() {
    return (
      <div className={classes.message__container}>
        <p>Card Successfully added</p>
        <Button text={'OK'} onClck={this.props.closeModal} />
      </div>
    );
  }
}

export default CardAdded;
