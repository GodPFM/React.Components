import React, { Component } from 'react';
import Input from '../components/UI/input/Input';
import '../styles/AddCardForm.css';

class AddCardForm extends Component {
  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <Input placeholder={'Title'} labelForInput={'Title:'} name={'title'} />
      </div>
    );
  }
}

export default AddCardForm;
