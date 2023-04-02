import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import classes from './Input.module.css';

interface IProps {
  isNeedSave: boolean;
  name?: string;
  placeholder: string;
  labelForInput?: string;
  type?: string;
  inputRef?: React.Ref<HTMLInputElement> | null | undefined;
}

const Input = (props: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const searchValue = useRef('');
  searchValue.current = inputValue;

  useLayoutEffect(() => {
    const restoreData = () => {
      if (props.isNeedSave) {
        const value = localStorage.getItem(`${props.name}Input`);
        window.addEventListener('beforeunload', handleWindowBeforeUnload);
        if (value) {
          setInputValue(value);
        } else {
          setInputValue('');
        }
      }
    };
    restoreData();
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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
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
        name={props.name}
        id={props.name}
        type={type}
      />
    </div>
  );
};

export default Input;
