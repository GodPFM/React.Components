import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

class SearchField extends Component {
  render() {
    return (
      <div className="search__container">
        <Link className="search__create-link" to={'add-item'}>
          <Button text={'Create card'} />
        </Link>
        <Input placeholder={'Search'} />
      </div>
    );
  }
}

export default SearchField;
