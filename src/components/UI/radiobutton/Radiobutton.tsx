import React, { Component } from 'react';
import classes from './Radiobutton.module.css';

interface IProps {
  values: Array<[string, React.Ref<HTMLInputElement> | null | undefined]>;
  name: string;
  title: string;
  maleRef?: React.Ref<HTMLInputElement> | null | undefined;
  womanRef?: React.Ref<HTMLInputElement> | null | undefined;
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
                value={item[0]}
                ref={item[1]}
              />
              {item[0]}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default Radiobutton;
