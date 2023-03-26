import React, { Component } from 'react';
import NameAndSurnameInputs from '../NameInputs/NameAndSurnameInputs';
import DateAndSelectInputs from '../DateAndSelectInputs/DateAndSelectInputs';
import Radiobutton from '../UI/radiobutton/Radiobutton';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import ImageInput from '../UI/imageInput/ImageInput';
import Checkbox from '../UI/checkbox/Checkbox';
import Button from '../UI/button/Button';
import ValidationInputs from '../../utils/Validation';
import getSex from '../../utils/getSex';
import { CardFormCheck } from '../../types/CardForm';
import { CardWithUsers } from '../../types/CardWithUsers';
import Modal from '../UI/Modal/Modal';
import CardAdded from '../CardAdded/CardAdded';

interface IProps {
  setCard: (objectData: CardWithUsers) => void;
}

class Form extends Component<IProps, CardFormCheck> {
  public nameRef = React.createRef<HTMLInputElement>();
  public surnameRef = React.createRef<HTMLInputElement>();
  public dateRef = React.createRef<HTMLInputElement>();
  public selectRef = React.createRef<HTMLSelectElement>();
  public checkboxRef = React.createRef<HTMLInputElement>();
  public radioMaleRef = React.createRef<HTMLInputElement>();
  public radioWomanRef = React.createRef<HTMLInputElement>();
  public radioOtherRef = React.createRef<HTMLInputElement>();
  public imageLoadRef = React.createRef<HTMLInputElement>();
  public formRef = React.createRef<HTMLFormElement>();
  constructor(props: IProps) {
    super(props);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.getImage = this.getImage.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      cards: [],
      openModal: false,
    };
  }

  getImage(file: FileList | null | undefined) {
    if (file) {
      const image = URL.createObjectURL(file[0]);
      this.setState({ image: image });
    }
  }

  closeModal() {
    this.submitForm();
    this.setState({ image: '' });
    this.formRef.current?.reset();
    this.setState({ openModal: false });
  }
  async openModal() {
    const checkResult = await this.checkSubmit();
    if (checkResult) {
      this.setState({ openModal: true });
    }
  }

  submitForm() {
    const sex = getSex(this.radioWomanRef.current?.checked, this.radioMaleRef.current?.checked);
    if (this.nameRef.current?.value && this.surnameRef.current?.value) {
      const objectData = {
        name: `${this.nameRef.current.value} ${this.surnameRef.current.value}`,
        date: this.dateRef.current?.value,
        profession: this.selectRef.current?.value,
        sex: sex,
        image: this.state.image,
      };
      this.props.setCard(objectData);
    }
  }

  async checkSubmit() {
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
        imageInputCheck: ValidationInputs.validateImageInput(this.imageLoadRef.current?.files),
      },
    });
    if (!this.state.formChecks?.imageInputCheck) {
      this.getImage(this.imageLoadRef.current?.files);
    }
    return (
      !this.state.formChecks?.nameCheck &&
      !this.state.formChecks?.surnameCheck &&
      !this.state.formChecks?.dateCheck &&
      !this.state.formChecks?.selectCheck &&
      !this.state.formChecks?.checkboxCheck &&
      !this.state.formChecks?.radioCheck &&
      !this.state.formChecks?.imageInputCheck
    );
  }
  render() {
    return (
      <form ref={this.formRef} onSubmit={this.closeModal}>
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
        <Button
          onClck={(e: React.MouseEvent) => {
            e.preventDefault();
            this.openModal();
          }}
          text={'Submit'}
        />
        {this.state.openModal && (
          <Modal closeModal={this.closeModal}>
            <CardAdded closeModal={this.closeModal} />
          </Modal>
        )}
      </form>
    );
  }
}

export default Form;
