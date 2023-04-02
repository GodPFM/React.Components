import React, { Component } from 'react';
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

class FormInput extends Component<IProps> {
  render() {
    return (
      <div className={classes.formInput__container}>
        {this.props.labelForInput && (
          <label htmlFor={this.props.name}>{this.props.labelForInput}</label>
        )}
        <input
          className={classes.formInput}
          placeholder={this.props.placeholder}
          id={this.props.name}
          type={this.props.type}
          {...this.props.register(this.props.name, { ...this.props.validate })}
        />
      </div>
    );
  }
}
export default FormInput;
