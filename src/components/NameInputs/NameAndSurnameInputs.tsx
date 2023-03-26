import React, { Component } from 'react';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import classes from './NameAndSurname.module.css';
import FormInput from '../UI/formInput/FormInput';

interface IProps {
  nameRef: React.Ref<HTMLInputElement> | null | undefined;
  surnameRef: React.Ref<HTMLInputElement> | null | undefined;
  nameError: string | boolean | undefined;
  surnameError: string | boolean | undefined;
}

class NameAndSurnameInputs extends Component<IProps> {
  render() {
    return (
      <div className={classes.container}>
        <div>
          <FormInput
            placeholder={'Name'}
            labelForInput={'Name:'}
            name={'Name'}
            type={'text'}
            inputRef={this.props.nameRef}
          />
          {this.props.nameError && <ErrorMessage text={this.props.nameError} />}
        </div>
        <div>
          <FormInput
            placeholder={'Surname'}
            labelForInput={'Surname:'}
            name={'Surname'}
            type={'text'}
            inputRef={this.props.surnameRef}
          />
          {this.props.surnameError && <ErrorMessage text={this.props.surnameError} />}
        </div>
      </div>
    );
  }
}

export default NameAndSurnameInputs;
