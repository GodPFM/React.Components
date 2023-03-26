import React, { Component } from 'react';
import Input from '../components/UI/input/Input';
import '../styles/AddCardForm.css';
import Select from '../components/UI/select/Select';
import Checkbox from '../components/UI/checkbox/Checkbox';
import Radiobutton from '../components/UI/radiobutton/Radiobutton';
import ImageInput from '../components/UI/imageInput/ImageInput';
import Button from '../components/UI/button/Button';
import ValidationInputs from '../utils/Validation';
import ErrorMessage from '../components/UI/errorMessage/ErrorMessage';
import NameAndSurnameInputs from '../components/NameInputs/NameAndSurnameInputs';
import { b } from 'vitest/dist/types-5872e574';
import DateAndSelectInputs from '../components/DateAndSelectInputs/DateAndSelectInputs';

interface IProps {
  test?: string;
}

interface IState {
  nameCheck?: string | boolean;
  surnameCheck?: string | boolean;
  dateCheck?: string | boolean;
  selectCheck?: string | boolean;
  checkboxCheck?: string | boolean;
  radioCheck?: string | boolean;
  imageInputCheck?: string | boolean;
}

class AddCardForm extends Component<IProps, IState> {
  public nameRef = React.createRef<HTMLInputElement>();
  public surnameRef = React.createRef<HTMLInputElement>();
  public dateRef = React.createRef<HTMLInputElement>();
  public selectRef = React.createRef<HTMLSelectElement>();
  public checkboxRef = React.createRef<HTMLInputElement>();
  public radioMaleRef = React.createRef<HTMLInputElement>();
  public radioWomanRef = React.createRef<HTMLInputElement>();
  public radioOtherRef = React.createRef<HTMLInputElement>();
  public imageLoadRef = React.createRef<HTMLInputElement>();
  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.nameRef.current?.value);
    this.setState({
      nameCheck: ValidationInputs.validateInputText(this.nameRef.current?.value),
      surnameCheck: ValidationInputs.validateInputText(this.surnameRef.current?.value),
      dateCheck: ValidationInputs.validateInputDate(this.dateRef.current?.value),
      selectCheck: ValidationInputs.validateSelect(this.selectRef.current?.value),
      checkboxCheck: ValidationInputs.validateCheckbox(this.checkboxRef.current?.checked),
      radioCheck: ValidationInputs.validateRadioInput(
        this.radioWomanRef.current?.checked,
        this.radioMaleRef.current?.checked,
        this.radioOtherRef.current?.checked
      ),
      imageInputCheck: ValidationInputs.validateImageInput(this.imageLoadRef.current?.value),
    });
  }
  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <form onSubmit={this.handleSubmit}>
          <NameAndSurnameInputs
            nameRef={this.nameRef}
            surnameRef={this.surnameRef}
            nameError={this.state.nameCheck}
            surnameError={this.state.surnameCheck}
          />
          <DateAndSelectInputs
            dateRef={this.dateRef}
            selectRef={this.selectRef}
            dateError={this.state.dateCheck}
            selectError={this.state.selectCheck}
          />
          <Radiobutton
            values={[
              ['Male', this.radioMaleRef],
              ['Woman', this.radioWomanRef],
              ['Other', this.radioOtherRef],
            ]}
            name={'sex'}
            title={'Sex:'}
          />
          {this.state.radioCheck && <ErrorMessage text={this.state.radioCheck} />}
          <ImageInput imageInputRef={this.imageLoadRef} />
          {this.state.imageInputCheck && <ErrorMessage text={this.state.imageInputCheck} />}
          <Checkbox
            value={'terms'}
            text={'I accept terms and conditions'}
            checkboxRef={this.checkboxRef}
          />
          {this.state.checkboxCheck && <ErrorMessage text={this.state.checkboxCheck} />}
          <Button text={'Submit'} />
        </form>
      </div>
    );
  }
}

export default AddCardForm;
