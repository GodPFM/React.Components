import React, { Component } from 'react';
import classes from './Modal.module.css';
import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  closeModal: () => void;
}

interface IState {
  test?: string;
}

class Modal extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  handleClick(e: React.MouseEvent) {
    e.stopPropagation();
  }
  render() {
    return (
      <div className={classes.modal} onClick={this.props.closeModal}>
        <div className={classes.modal__container} onClick={this.handleClick}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
