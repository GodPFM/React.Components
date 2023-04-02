import React, { Component } from 'react';
import classes from './Select.module.css';
import { UseFormRegister } from 'react-hook-form';
import { CardFormData } from '../../../types/CardForm';

interface IProps {
  register: UseFormRegister<CardFormData>;
}

class Select extends Component<IProps> {
  render() {
    return (
      <select
        className={classes.select}
        id="profession"
        defaultValue=""
        {...this.props.register('professionSelect', {
          required: 'Select one option',
        })}
      >
        <option value="" disabled>
          Choose your profession
        </option>
        <option value="programmer">Programmer</option>
        <option value="designer">Designer</option>
        <option value="other">Other</option>
      </select>
    );
  }
}

export default Select;
