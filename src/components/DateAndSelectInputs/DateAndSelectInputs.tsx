import React from 'react';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Select from '../UI/select/Select';
import classes from './DateAndSelectInputs.module.css';
import FormInput from '../UI/formInput/FormInput';
import { UseFormRegister } from 'react-hook-form';
import ValidationInputs from '../../utils/Validation';
import { CardFormData } from '../../types/CardForm';

interface IProps {
  dateRef: UseFormRegister<CardFormData>;
  selectRef: UseFormRegister<CardFormData>;
  dateError: string | boolean | undefined;
  selectError: string | boolean | undefined;
}

const DateAndSelectInputs = (props: IProps) => {
  return (
    <div className={classes.container}>
      <div>
        <FormInput
          placeholder={'Birthday'}
          type={'date'}
          labelForInput={'Birthday:'}
          name={'birthdate'}
          register={props.dateRef}
          validate={{
            required: 'Date is empty',
            validate: (date) => {
              console.log(date);
              const validate = ValidationInputs.validateInputDate(date);
              return validate ? validate : true;
            },
          }}
        />
        {props.dateError && <ErrorMessage text={props.dateError} />}
      </div>
      <div>
        <Select register={props.selectRef} />
        {props.selectError && <ErrorMessage text={props.selectError} />}
      </div>
    </div>
  );
};

export default DateAndSelectInputs;
