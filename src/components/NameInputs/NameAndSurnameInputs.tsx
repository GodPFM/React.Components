import React from 'react';
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

const NameAndSurnameInputs = (props: IProps) => {
  return (
    <div className={classes.container}>
      <div>
        <FormInput
          placeholder={'Name'}
          labelForInput={'Name:'}
          name={'name'}
          type={'text'}
          register={props.nameRef}
          validate={{
            required: 'Value is empty',
            minLength: { value: 3, message: 'Length < 3' },
            pattern: {
              value: /^[A-Z]/,
              message: 'First letter must be uppercase',
            },
          }}
        />
        {props.nameError && <ErrorMessage text={props.nameError} />}
      </div>
      <div>
        <FormInput
          placeholder={'Surname'}
          labelForInput={'Surname:'}
          name={'surname'}
          type={'text'}
          register={props.surnameRef}
          validate={{
            required: 'Value is empty',
            minLength: { value: 3, message: 'Length < 3' },
            pattern: {
              value: /^[A-Z]/,
              message: 'First letter must be uppercase',
            },
          }}
        />
        {props.surnameError && <ErrorMessage text={props.surnameError} />}
      </div>
    </div>
  );
};

export default NameAndSurnameInputs;
