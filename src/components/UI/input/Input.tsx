import React, { useLayoutEffect, useRef, useState, KeyboardEvent, useEffect } from 'react';
import classes from './Input.module.css';

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
  const [inputValue, setInputValue] = useState('');
  const searchValue = useRef('');
  searchValue.current = inputValue;

  useLayoutEffect(() => {
    if (props.isNeedSave) {
      const value = localStorage.getItem(`${props.name}Input`);
      window.addEventListener('beforeunload', handleWindowBeforeUnload);
      const restoreValue = async () => {
        if (value) {
          await setInputValue(value);
        } else {
          await setInputValue('');
        }
        if (props.getFilteredCards) {
          const value = searchValue.current ? searchValue.current : '';
          props.getFilteredCards(value);
        }
      };
      restoreValue();
    }
    return () => {
      if (props.isNeedSave) {
        window.removeEventListener('beforeunload', handleWindowBeforeUnload);
        localStorage.setItem(`${props.name}Input`, searchValue.current);
      }
    };
  }, []);

  const type = props.type ? props.type : 'text';

  const handleWindowBeforeUnload = () => {
    if (props.isNeedSave) {
      localStorage.setItem(`${props.name}Input`, searchValue.current);
    }
  };

  const handleChange = (event: KeyboardEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && props.getFilteredCards) {
      props.getFilteredCards(searchValue.current);
    }
  };

  return (
    <div className={classes.searchInput__container}>
      {props.labelForInput && <label htmlFor={props.name}>{props.labelForInput}</label>}
      <input
        className={classes.searchInput}
        ref={props.inputRef}
        value={inputValue}
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
