import React, { KeyboardEvent } from 'react';
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
}

const Input = (props: IProps) => {
  const { previousSearchQuery } = useAppSelector((state) => state.cardsReducer);
  const { value } = useAppSelector((state) => state.searchReducer);
  const { changeValue } = searchSlice.actions;
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (data) {
  //     dispatch(addCards([value, data]));
  //   }
  // }, [data]);

  const type = props.type ? props.type : 'text';

  const handleChange = (event: KeyboardEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.currentTarget.value));
  };

  const handleEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (value === previousSearchQuery) {
        return;
      }
      // dispatch(setDownloadState());
      // trigger({
      //   limit: 8,
      //   offset: 0,
      //   filter: value,
      // });
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
