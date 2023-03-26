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

interface IProps {
  test?: string;
}

interface IState {
  textCheck?: string | boolean;
  dateCheck?: string | boolean;
  selectCheck?: string | boolean;
  checkboxCheck?: string | boolean;
  radioCheck?: string | boolean;
  imageInputCheck?: string | boolean;
}

class AddCardForm extends Component<IProps, IState> {
  private titleRef = React.createRef<HTMLInputElement>();
  private dateRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private radioMaleRef = React.createRef<HTMLInputElement>();
  private radioWomanRef = React.createRef<HTMLInputElement>();
  private imageLoadRef = React.createRef<HTMLInputElement>();
  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.dateRef.current?.value);
    this.setState({
      textCheck: ValidationInputs.validateInputText(this.titleRef.current?.value),
      dateCheck: ValidationInputs.validateInputDate(this.dateRef.current?.value),
      selectCheck: ValidationInputs.validateSelect(this.selectRef.current?.value),
      checkboxCheck: ValidationInputs.validateCheckbox(this.checkboxRef.current?.checked),
      radioCheck: ValidationInputs.validateRadioInput(
        this.radioWomanRef.current?.checked,
        this.radioMaleRef.current?.checked
      ),
      imageInputCheck: ValidationInputs.validateImageInput(this.imageLoadRef.current?.value),
    });
  }
  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder={'Title'}
            labelForInput={'Title:'}
            name={'title'}
            inputRef={this.titleRef}
          />
          {this.state.textCheck && <ErrorMessage text={this.state.textCheck} />}
          <Input
            placeholder={'Date'}
            type={'date'}
            labelForInput={'Date:'}
            name={'date'}
            inputRef={this.dateRef}
          />
          {this.state.dateCheck && <ErrorMessage text={this.state.dateCheck} />}
          <Select selectRef={this.selectRef} />
          {this.state.selectCheck && <ErrorMessage text={this.state.selectCheck} />}
          <Checkbox
            value={'terms'}
            text={'I accept terms and conditions'}
            checkboxRef={this.checkboxRef}
          />
          {this.state.checkboxCheck && <ErrorMessage text={this.state.checkboxCheck} />}
          <Radiobutton
            values={[
              ['Male', this.radioMaleRef],
              ['Woman', this.radioWomanRef],
            ]}
            name={'sex'}
            title={'Sex:'}
          />
          {this.state.radioCheck && <ErrorMessage text={this.state.radioCheck} />}
          <ImageInput imageInputRef={this.imageLoadRef} />
          {this.state.imageInputCheck && <ErrorMessage text={this.state.imageInputCheck} />}
          <Button text={'Submit'} />
        </form>
      </div>
    );
  }
}

export default AddCardForm;
