import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

interface IProps {
  openModal: () => void;
}

class SearchField extends Component<IProps> {
  render() {
    return (
      <div className="search__container">
        <Link className="search__create-link" to={'add-item'} onClick={this.props.openModal}>
          <Button text={'Create card'} />
        </Link>
        <Input name={'search'} placeholder={'Search'} isNeedSave={true} />
      </div>
    );
  }
}

export default SearchField;
