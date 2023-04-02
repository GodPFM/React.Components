import React from 'react';
import classes from './Checkbox.module.css';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { CardFormData } from '../../../types/CardForm';

interface IProps {
  value: 'terms' | 'notification';
  text: string;
  checkboxRef: UseFormRegister<CardFormData>;
  required?: RegisterOptions | undefined;
}

const Checkbox = (props: IProps) => {
  return (
    <div className={classes.checkbox__container}>
      <input
        type="checkbox"
        id={props.value}
        value={props.value}
        {...props.checkboxRef(`${props.value}Checkbox`, props.required)}
      />
      <label className={classes.checkbox__label} htmlFor={props.value}>
        <span className={classes.checkbox__span}></span>
        {props.text}
      </label>
    </div>
  );
};

export default Checkbox;
