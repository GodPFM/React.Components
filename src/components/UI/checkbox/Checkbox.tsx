import React, { Component } from 'react';
import classes from './Checkbox.module.css';

interface IProps {
  value: string;
  text: string;
}

class Checkbox extends Component<IProps> {
  render() {
    return (
      <div className={classes.checkbox__container}>
        <input type="checkbox" id={this.props.value} name="check" value={this.props.value} />
        <label className={classes.checkbox__label} htmlFor={this.props.value}>
          <span className={classes.checkbox__span}></span>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default Checkbox;
