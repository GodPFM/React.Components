import React, { Component } from 'react';
import '../styles/AddCardForm.css';
import Checkbox from '../components/UI/checkbox/Checkbox';
import Radiobutton from '../components/UI/radiobutton/Radiobutton';
import ImageInput from '../components/UI/imageInput/ImageInput';
import Button from '../components/UI/button/Button';
import ValidationInputs from '../utils/Validation';
import ErrorMessage from '../components/UI/errorMessage/ErrorMessage';
import NameAndSurnameInputs from '../components/NameInputs/NameAndSurnameInputs';
import DateAndSelectInputs from '../components/DateAndSelectInputs/DateAndSelectInputs';
import { CardFormCheck } from '../types/CardForm';
import getSex from '../utils/getSex';
import CardsWithUsers from '../components/CardsWithUsers/CardsWithUsers';

class AddCardForm extends Component<object, CardFormCheck> {
  public nameRef = React.createRef<HTMLInputElement>();
  public surnameRef = React.createRef<HTMLInputElement>();
  public dateRef = React.createRef<HTMLInputElement>();
  public selectRef = React.createRef<HTMLSelectElement>();
  public checkboxRef = React.createRef<HTMLInputElement>();
  public radioMaleRef = React.createRef<HTMLInputElement>();
  public radioWomanRef = React.createRef<HTMLInputElement>();
  public radioOtherRef = React.createRef<HTMLInputElement>();
  public imageLoadRef = React.createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getImage = this.getImage.bind(this);
    this.state = {
      cards: [],
    };
  }

  getImage(file: FileList) {
    const image = URL.createObjectURL(file[0]);
    console.log(image);
    this.setState({ image: image });
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.imageLoadRef.current?.value);
    await this.setState({
      formChecks: {
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
      },
    });
    if (
      !this.state.formChecks?.nameCheck &&
      !this.state.formChecks?.surnameCheck &&
      !this.state.formChecks?.dateCheck &&
      !this.state.formChecks?.selectCheck &&
      !this.state.formChecks?.checkboxCheck &&
      !this.state.formChecks?.radioCheck &&
      !this.state.formChecks?.imageInputCheck
    ) {
      console.log(1);
      const sex = getSex(this.radioWomanRef.current?.checked, this.radioMaleRef.current?.checked);
      if (this.nameRef.current?.value && this.surnameRef.current?.value) {
        const objectData = {
          name: `${this.nameRef.current.value} ${this.surnameRef.current.value}`,
          date: this.dateRef.current?.value,
          profession: this.selectRef.current?.value,
          sex: sex,
          image: this.state.image,
        };
        this.setState({ cards: [...this.state.cards, objectData] });
      }
    }
  }
  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <form onSubmit={this.handleSubmit}>
          <NameAndSurnameInputs
            nameRef={this.nameRef}
            surnameRef={this.surnameRef}
            nameError={this.state.formChecks?.nameCheck}
            surnameError={this.state.formChecks?.surnameCheck}
          />
          <DateAndSelectInputs
            dateRef={this.dateRef}
            selectRef={this.selectRef}
            dateError={this.state.formChecks?.dateCheck}
            selectError={this.state.formChecks?.selectCheck}
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
          {this.state.formChecks?.radioCheck && (
            <ErrorMessage text={this.state.formChecks?.radioCheck} />
          )}
          <ImageInput imageInputRef={this.imageLoadRef} getImage={this.getImage} />
          {this.state.formChecks?.imageInputCheck && (
            <ErrorMessage text={this.state.formChecks?.imageInputCheck} />
          )}
          <Checkbox
            value={'terms'}
            text={'I accept terms and conditions'}
            checkboxRef={this.checkboxRef}
          />
          {this.state.formChecks?.checkboxCheck && (
            <ErrorMessage text={this.state.formChecks?.checkboxCheck} />
          )}
          <Button text={'Submit'} />
        </form>
        <CardsWithUsers cards={this.state.cards} />
      </div>
    );
  }
}

export default AddCardForm;
