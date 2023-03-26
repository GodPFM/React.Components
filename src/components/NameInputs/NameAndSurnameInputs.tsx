import React, { Component } from 'react';
import Input from '../UI/input/Input';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import classes from './NameAndSurname.module.css';

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
          <Input
            placeholder={'Name'}
            labelForInput={'Name:'}
            name={'Name'}
            inputRef={this.props.nameRef}
          />
          {this.props.nameError && <ErrorMessage text={this.props.nameError} />}
        </div>
        <div>
          <Input
            placeholder={'Surname'}
            labelForInput={'Surname:'}
            name={'Surname'}
            inputRef={this.props.surnameRef}
          />
          {this.props.surnameError && <ErrorMessage text={this.props.surnameError} />}
        </div>
      </div>
    );
  }
}

export default NameAndSurnameInputs;
