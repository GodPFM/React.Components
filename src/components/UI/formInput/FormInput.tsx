import React from 'react';
import classes from './FormInput.module.css';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { CardFormData } from '../../../types/CardForm';

interface IProps {
  name: 'name' | 'surname' | 'birthdate';
  placeholder: string;
  labelForInput: string;
  type: string;
  register: UseFormRegister<CardFormData>;
  validate: RegisterOptions | undefined;
}

const FormInput = (props: IProps) => {
  return (
    <div className={classes.formInput__container}>
      {props.labelForInput && <label htmlFor={props.name}>{props.labelForInput}</label>}
      <input
        className={classes.formInput}
        placeholder={props.placeholder}
        id={props.name}
        type={props.type}
        {...props.register(props.name, { ...props.validate })}
      />
    </div>
  );
};

export default FormInput;
