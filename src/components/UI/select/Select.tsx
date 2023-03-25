import React, { Component } from 'react';
import classes from './Select.module.css';

class Select extends Component {
  render() {
    return (
      <select className={classes.select} name="category" id="category">
        <option value="" disabled selected>
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
