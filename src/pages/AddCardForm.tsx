import React, { Component } from 'react';
import Input from '../components/UI/input/Input';
import '../styles/AddCardForm.css';
import Select from '../components/UI/select/Select';
import Checkbox from '../components/UI/checkbox/Checkbox';
import Radiobutton from '../components/UI/radiobutton/Radiobutton';
import ImageInput from '../components/UI/imageInput/ImageInput';

class AddCardForm extends Component {
  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <Input placeholder={'Title'} labelForInput={'Title:'} name={'title'} />
        <Input placeholder={'Date'} type={'date'} labelForInput={'Date:'} name={'date'} />
        <Select />
        <Checkbox value={'terms'} text={'I accept terms and conditions'} />
        <Radiobutton values={['Male', 'Woman']} name={'sex'} title={'Sex:'} />
        <ImageInput />
      </div>
    );
  }
}

export default AddCardForm;
