import React, { Component } from 'react';
import classes from './Button.module.css';

interface IState {
  test?: string;
}

interface IProps {
  text: string;
  onClck?: (e: React.MouseEvent) => void;
}

class Button extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={classes.button__container}>
        <button className={classes.button} onClick={this.props.onClck}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
