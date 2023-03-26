import React, { Component } from 'react';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Select from '../UI/select/Select';
import classes from './DateAndSelectInputs.module.css';
import FormInput from '../UI/formInput/FormInput';

interface IProps {
  dateRef: React.Ref<HTMLInputElement> | null | undefined;
  selectRef: React.Ref<HTMLSelectElement> | null | undefined;
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
            name={'Birthday'}
            inputRef={this.props.dateRef}
          />
          {this.props.dateError && <ErrorMessage text={this.props.dateError} />}
        </div>
        <div>
          <Select selectRef={this.props.selectRef} />
          {this.props.selectError && <ErrorMessage text={this.props.selectError} />}
        </div>
      </div>
    );
  }
}

export default DateAndSelectInputs;
