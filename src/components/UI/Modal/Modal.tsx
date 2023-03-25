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
  render() {
    return (
      <Link className={classes.modal} to={'/'} onClick={this.props.closeModal}>
        <div className={classes.modal__container}>{this.props.children}</div>
      </Link>
    );
  }
}

export default Modal;
