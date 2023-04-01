import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

interface IProps {
  openModal: () => void;
}

const SearchField = (props: IProps) => {
  return (
    <div className="search__container">
      <Link className="search__create-link" to={'add-item'} onClick={props.openModal}>
        <Button text={'Create card'} />
      </Link>
      <Input name={'search'} placeholder={'Search'} isNeedSave={true} />
    </div>
  );
};

export default SearchField;
