import React, { useLayoutEffect, useRef } from 'react';
import classes from './Modal.module.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface IProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = (props: IProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  let targetElement: Element | null = null;

  useLayoutEffect(() => {
    targetElement = targetRef.current;
    if (targetElement) {
      disableBodyScroll(targetElement);
    }
    return () => {
      if (targetElement) {
        enableBodyScroll(targetElement);
      }
    };
  }, []);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div ref={targetRef} className={classes.modal} onClick={props.closeModal}>
      <div className={classes.modal__container} onClick={handleClick}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
