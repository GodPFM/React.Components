import React, { KeyboardEvent, useLayoutEffect } from 'react';
import classes from './Input.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { searchSlice } from '../../../store/searchSlice';

interface IProps {
  isNeedSave: boolean;
  name?: string;
  placeholder: string;
  labelForInput?: string;
  type?: string;
  inputRef?: React.Ref<HTMLInputElement> | null | undefined;
  getFilteredCards?: (value: string) => void;
}

const Input = (props: IProps) => {
  const { value } = useAppSelector((state) => state.searchReducer);
  const { changeValue } = searchSlice.actions;
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (props.isNeedSave) {
      if (props.getFilteredCards) {
        props.getFilteredCards(value);
      }
    }
  }, []);

  const type = props.type ? props.type : 'text';

  const handleChange = (event: KeyboardEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.currentTarget.value));
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && props.getFilteredCards) {
      props.getFilteredCards(value);
    }
  };

  return (
    <div className={classes.searchInput__container}>
      {props.labelForInput && <label htmlFor={props.name}>{props.labelForInput}</label>}
      <input
        className={classes.searchInput}
        ref={props.inputRef}
        value={value}
        onInput={handleChange}
        placeholder={props.placeholder}
        onKeyPress={handleEnter}
        name={props.name}
        id={props.name}
        type={type}
      />
    </div>
  );
};

export default Input;
