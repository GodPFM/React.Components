import React, { Component } from 'react';
import Input from '../components/UI/input/Input';
import '../styles/AddCardForm.css';
import Select from '../components/UI/select/Select';

class AddCardForm extends Component {
  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <Input placeholder={'Title'} labelForInput={'Title:'} name={'title'} />
        <Input placeholder={'Date'} type={'date'} labelForInput={'Date:'} name={'date'} />
        <Input placeholder={'Title'} labelForInput={'Title:'} name={'title'} />

        <Select />
      </div>
    );
  }
}

export default AddCardForm;
