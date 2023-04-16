import React, { KeyboardEvent, useEffect } from 'react';
import classes from './Input.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { searchSlice } from '../../../store/searchSlice';
import { cardsSlice } from '../../../store/cardsSlice';
import { cardsAPI } from '../../../API/ProductsServes';

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
  const { previousSearchQuery } = useAppSelector((state) => state.cardsReducer);
  const { value } = useAppSelector((state) => state.searchReducer);
  const { changeValue } = searchSlice.actions;
  const { setDownloadState, addCards } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [trigger, { data }] = cardsAPI.useLazyFetchAllCardsQuery();

  useEffect(() => {
    if (data) {
      dispatch(addCards([value, data]));
    }
  }, [data]);

  const type = props.type ? props.type : 'text';

  const handleChange = (event: KeyboardEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.currentTarget.value));
  };

  const handleEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (value === previousSearchQuery) {
        return;
      }
      dispatch(setDownloadState());
      trigger({
        limit: 12,
        offset: 0,
        filter: value,
      });
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
