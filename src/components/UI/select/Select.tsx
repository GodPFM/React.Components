import React, { Component } from 'react';
import classes from './Select.module.css';

interface IProps {
  selectRef?: React.Ref<HTMLSelectElement> | null | undefined;
}

class Select extends Component<IProps> {
  render() {
    return (
      <select
        className={classes.select}
        name="profession"
        id="profession"
        defaultValue=""
        ref={this.props.selectRef}
      >
        <option value="" disabled>
          Choose your profession
        </option>
        <option value="programmer">Programmer</option>
        <option value="designer">Designer</option>
        <option value="other">Other</option>
      </select>
    );
  }
}

export default Select;
