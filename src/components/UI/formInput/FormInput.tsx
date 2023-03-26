import React, { Component } from 'react';
import classes from './FormInput.module.css';

interface IProps {
  name: string;
  placeholder: string;
  labelForInput: string;
  type: string;
  inputRef: React.Ref<HTMLInputElement> | null | undefined;
}

class FormInput extends Component<IProps> {
  render() {
    return (
      <div className={classes.formInput__container}>
        {this.props.labelForInput && (
          <label htmlFor={this.props.name}>{this.props.labelForInput}</label>
        )}
        <input
          className={classes.formInput}
          ref={this.props.inputRef}
          placeholder={this.props.placeholder}
          name={this.props.name}
          id={this.props.name}
          type={this.props.type}
        />
      </div>
    );
  }
}
export default FormInput;
