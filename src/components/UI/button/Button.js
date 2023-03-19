import React, { Component } from 'react';
import classes from './Button.module.css';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return React.createElement(
      'div',
      { className: classes.button__container },
      React.createElement(
        'button',
        { className: classes.button, onClick: this.props.onClck },
        this.props.text
      )
    );
  }
}
export default Button;
