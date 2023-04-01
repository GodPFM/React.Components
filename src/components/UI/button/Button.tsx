import React from 'react';
import classes from './Button.module.css';

interface IProps {
  text: string;
  onClck?: (e: React.MouseEvent) => void;
}

const Button = (props: IProps) => {
  return (
    <div className={classes.button__container}>
      <button className={classes.button} onClick={props.onClck}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
