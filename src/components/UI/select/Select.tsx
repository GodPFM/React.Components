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
        name="category"
        id="category"
        defaultValue=""
        ref={this.props.selectRef}
      >
        <option value="" disabled>
          Choose category
        </option>
        <option value="electronic">Electronic</option>
        <option value="clothes">Clothes</option>
        <option value="shoes">Shoes</option>
      </select>
    );
  }
}

export default Select;
