import React from 'react';
import classes from './Button.module.css';

interface IProps {
  text: string;
  onClck?: (e: React.MouseEvent) => void;
  type?: 'submit';
}

const Button = (props: IProps) => {
  const type = props.type ? props.type : 'button';
  return (
    <div className={classes.button__container}>
      <button className={classes.button} onClick={props.onClck} type={type} data-testid="submitBtn">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
