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
        <Link className="search__create-link" to={'add-item'}>
          <Button text={'Create card'} onClck={this.props.openModal} />
        </Link>
        <Input placeholder={'Search'} />
      </div>
    );
  }
}

export default SearchField;
