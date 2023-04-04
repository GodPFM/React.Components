import React from 'react';
import classes from './Modal.module.css';

interface IProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = (props: IProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className={classes.modal} onClick={props.closeModal}>
      <div className={classes.modal__container} onClick={handleClick}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
