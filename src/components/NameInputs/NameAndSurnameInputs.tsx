import React, { Component } from 'react';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import classes from './NameAndSurname.module.css';
import FormInput from '../UI/formInput/FormInput';
import { UseFormRegister } from 'react-hook-form';
import { CardFormData } from '../../types/CardForm';

interface IProps {
  nameRef: UseFormRegister<CardFormData>;
  surnameRef: UseFormRegister<CardFormData>;
  nameError: string | undefined;
  surnameError: string | undefined;
}

class NameAndSurnameInputs extends Component<IProps> {
  render() {
    return (
      <div className={classes.container}>
        <div>
          <FormInput
            placeholder={'Name'}
            labelForInput={'Name:'}
            name={'name'}
            type={'text'}
            register={this.props.nameRef}
            validate={{
              required: 'Value is empty',
              minLength: { value: 3, message: 'Length < 3' },
              pattern: {
                value: /^[A-Z]/,
                message: 'First letter must be uppercase',
              },
            }}
          />
          {this.props.nameError && <ErrorMessage text={this.props.nameError} />}
        </div>
        <div>
          <FormInput
            placeholder={'Surname'}
            labelForInput={'Surname:'}
            name={'surname'}
            type={'text'}
            register={this.props.surnameRef}
            validate={{
              required: 'Value is empty',
              minLength: { value: 3, message: 'Length < 3' },
              pattern: {
                value: /^[A-Z]/,
                message: 'First letter must be uppercase',
              },
            }}
          />
          {this.props.surnameError && <ErrorMessage text={this.props.surnameError} />}
        </div>
      </div>
    );
  }
}

export default NameAndSurnameInputs;
