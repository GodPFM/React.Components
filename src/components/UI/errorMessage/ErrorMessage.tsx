import React from 'react';
import classes from './ErrorMessage.module.css';

interface IProps {
  text: string | boolean;
}

const ErrorMessage = (props: IProps) => {
  return (
    <div className={classes.error__container} data-testid="errorMessage">
      <p className={classes.error__message}>{props.text}</p>
    </div>
  );
};

export default ErrorMessage;
