import React, { Component } from 'react';
import classes from './Radiobutton.module.css';

interface IProps {
  values: Array<string>;
  name: string;
  title: string;
}

class Radiobutton extends Component<IProps> {
  render() {
    return (
      <div className={classes.radio}>
        <h3 className={classes.radio__title}>{this.props.title}</h3>
        <div className={classes.radio__container}>
          {this.props.values.map((item, index) => (
            <label key={index}>
              <input
                className={classes.radio__input}
                type="radio"
                name={this.props.name}
                value={item}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default Radiobutton;
