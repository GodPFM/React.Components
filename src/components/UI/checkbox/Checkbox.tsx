import React, { Component } from 'react';
import classes from './Checkbox.module.css';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { CardFormData } from '../../../types/CardForm';

interface IProps {
  value: 'terms' | 'notification';
  text: string;
  checkboxRef: UseFormRegister<CardFormData>;
  required?: RegisterOptions | undefined;
}

class Checkbox extends Component<IProps> {
  render() {
    return (
      <div className={classes.checkbox__container}>
        <input
          type="checkbox"
          id={this.props.value}
          value={this.props.value}
          {...this.props.checkboxRef(`${this.props.value}Checkbox`, this.props.required)}
        />
        <label className={classes.checkbox__label} htmlFor={this.props.value}>
          <span className={classes.checkbox__span}></span>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default Checkbox;
