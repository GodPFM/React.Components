import React, { Component } from 'react';
import Input from '../components/UI/input/Input';
import '../styles/AddCardForm.css';
import Select from '../components/UI/select/Select';
import Checkbox from '../components/UI/checkbox/Checkbox';
import Radiobutton from '../components/UI/radiobutton/Radiobutton';
import ImageInput from '../components/UI/imageInput/ImageInput';
import Button from '../components/UI/button/Button';

interface IProps {
  test?: string;
}

class AddCardForm extends Component {
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
  }

  componentDidMount() {
    console.log(this.titleRef?.current);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.selectRef.current?.value);
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
          <Input
            placeholder={'Date'}
            type={'date'}
            labelForInput={'Date:'}
            name={'date'}
            inputRef={this.dateRef}
          />
          <Select selectRef={this.selectRef} />
          <Checkbox
            value={'terms'}
            text={'I accept terms and conditions'}
            checkboxRef={this.checkboxRef}
          />
          <Radiobutton
            values={[
              ['Male', this.radioMaleRef],
              ['Woman', this.radioWomanRef],
            ]}
            name={'sex'}
            title={'Sex:'}
          />
          <ImageInput imageInputRef={this.imageLoadRef} />
          <Button text={'Submit'} />
        </form>
      </div>
    );
  }
}

export default AddCardForm;
