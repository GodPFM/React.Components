import React, { Component } from 'react';
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
class DateAndSelectInputs extends Component<IProps> {
  render() {
    return (
      <div className={classes.container}>
        <div>
          <FormInput
            placeholder={'Birthday'}
            type={'date'}
            labelForInput={'Birthday:'}
            name={'birthdate'}
            register={this.props.dateRef}
            validate={{
              required: 'Value is empty',
              validate: (date) => {
                const validate = ValidationInputs.validateInputDate(date);
                return validate ? validate : true;
              },
            }}
          />
          {this.props.dateError && <ErrorMessage text={this.props.dateError} />}
        </div>
        <div>
          <Select register={this.props.selectRef} />
          {this.props.selectError && <ErrorMessage text={this.props.selectError} />}
        </div>
      </div>
    );
  }
}

export default DateAndSelectInputs;
