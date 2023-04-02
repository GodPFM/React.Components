import React from 'react';
import classes from './Radiobutton.module.css';
import { UseFormRegister } from 'react-hook-form';
import { CardFormData } from '../../../types/CardForm';

interface IProps {
  values: Array<string>;
  name: string;
  title: string;
  register: UseFormRegister<CardFormData>;
  radioError: string | boolean | undefined;
}

const Radiobutton = (props: IProps) => {
  return (
    <div className={classes.radio}>
      <h3 className={classes.radio__title}>{props.title}</h3>
      <div className={classes.radio__container}>
        {props.values.map((item, index) => (
          <label key={index}>
            <input
              className={classes.radio__input}
              type="radio"
              value={item}
              {...props.register(`radioSex`, { required: 'Choose your sex' })}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radiobutton;
