import React, { Component } from 'react';
import classes from './ErrorMessage.module.css';

interface IProps {
  text: string | boolean;
}

class ErrorMessage extends Component<IProps> {
  render() {
    return (
      <div className={classes.error__container}>
        <p className={classes.error__message}>{this.props.text}</p>
      </div>
    );
  }
}

export default ErrorMessage;
