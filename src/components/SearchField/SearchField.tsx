import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

interface IProps {
  downloadFiltredCards: (value: string) => void;
}

const SearchField = (props: IProps) => {
  return (
    <div className="search__container">
      <Link className="search__create-link" to={'add-item'}>
        <Button text={'Create card'} />
      </Link>
      <Input
        name={'search'}
        placeholder={'Search'}
        isNeedSave={true}
        getFiltredCards={props.downloadFiltredCards}
      />
    </div>
  );
};

export default SearchField;
