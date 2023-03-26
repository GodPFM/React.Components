import React, { Component } from 'react';
import Input from '../UI/input/Input';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Select from '../UI/select/Select';
import classes from './DateAndSelectInputs.module.css';

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
          <Input
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
