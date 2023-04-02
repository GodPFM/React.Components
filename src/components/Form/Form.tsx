import React, { useState } from 'react';
import NameAndSurnameInputs from '../NameInputs/NameAndSurnameInputs';
import DateAndSelectInputs from '../DateAndSelectInputs/DateAndSelectInputs';
import Radiobutton from '../UI/radiobutton/Radiobutton';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import ImageInput from '../UI/imageInput/ImageInput';
import Checkbox from '../UI/checkbox/Checkbox';
import Button from '../UI/button/Button';
import { CardFormData } from '../../types/CardForm';
import { CardWithUsers } from '../../types/CardWithUsers';
import Modal from '../UI/Modal/Modal';
import CardAdded from '../CardAdded/CardAdded';
import { useForm } from 'react-hook-form';

interface IProps {
  setCard: (objectData: CardWithUsers) => void;
}

// class Form extends Component<IProps, CardFormCheck> {
//   public nameRef = React.createRef<HTMLInputElement>();
//   public surnameRef = React.createRef<HTMLInputElement>();
//   public dateRef = React.createRef<HTMLInputElement>();
//   public selectRef = React.createRef<HTMLSelectElement>();
//   public checkboxTermsRef = React.createRef<HTMLInputElement>();
//   public checkboxNotificationRef = React.createRef<HTMLInputElement>();
//   public radioMaleRef = React.createRef<HTMLInputElement>();
//   public radioWomanRef = React.createRef<HTMLInputElement>();
//   public radioOtherRef = React.createRef<HTMLInputElement>();
//   public imageLoadRef = React.createRef<HTMLInputElement>();
//   public formRef = React.createRef<HTMLFormElement>();
//   constructor(props: IProps) {
//     super(props);
//     this.checkSubmit = this.checkSubmit.bind(this);
//     this.getImage = this.getImage.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.submitForm = this.submitForm.bind(this);
//     this.state = {
//       cards: [],
//       openModal: false,
//     };
//   }
//
//   getImage(file: FileList | null | undefined) {
//     if (file) {
//       const image = URL.createObjectURL(file[0]);
//       this.setState({ image: image });
//     }
//   }
//
//   closeModal() {
//     this.submitForm();
//     this.setState({ image: '' });
//     this.formRef.current?.reset();
//     this.setState({ openModal: false });
//   }
//   async openModal() {
//     const checkResult = await this.checkSubmit();
//     if (checkResult) {
//       this.setState({ openModal: true });
//     }
//   }
//
//   submitForm() {
//     const sex = getSex(this.radioWomanRef.current?.checked, this.radioMaleRef.current?.checked);
//     if (this.nameRef.current?.value && this.surnameRef.current?.value) {
//       const objectData = {
//         name: `${this.nameRef.current.value} ${this.surnameRef.current.value}`,
//         date: this.dateRef.current?.value,
//         profession: this.selectRef.current?.value,
//         sex: sex,
//         image: this.state.image,
//         agreeGetNotification: this.checkboxNotificationRef.current?.checked,
//       };
//       this.props.setCard(objectData);
//     }
//   }
//
//   async checkSubmit() {
//     await this.setState({
//       formChecks: {
//         nameCheck: ValidationInputs.validateInputText(this.nameRef.current?.value),
//         surnameCheck: ValidationInputs.validateInputText(this.surnameRef.current?.value),
//         dateCheck: ValidationInputs.validateInputDate(this.dateRef.current?.value),
//         selectCheck: ValidationInputs.validateSelect(this.selectRef.current?.value),
//         checkboxCheck: ValidationInputs.validateCheckbox(this.checkboxTermsRef.current?.checked),
//         radioCheck: ValidationInputs.validateRadioInput(
//           this.radioWomanRef.current?.checked,
//           this.radioMaleRef.current?.checked,
//           this.radioOtherRef.current?.checked
//         ),
//         imageInputCheck: ValidationInputs.validateImageInput(this.imageLoadRef.current?.files),
//       },
//     });
//     if (!this.state.formChecks?.imageInputCheck) {
//       this.getImage(this.imageLoadRef.current?.files);
//     }
//     return (
//       !this.state.formChecks?.nameCheck &&
//       !this.state.formChecks?.surnameCheck &&
//       !this.state.formChecks?.dateCheck &&
//       !this.state.formChecks?.selectCheck &&
//       !this.state.formChecks?.checkboxCheck &&
//       !this.state.formChecks?.radioCheck &&
//       !this.state.formChecks?.imageInputCheck
//     );
//   }
//   render() {
//     return (
//       <form ref={this.formRef} onSubmit={this.closeModal}>
//         <NameAndSurnameInputs
//           nameRef={this.nameRef}
//           surnameRef={this.surnameRef}
//           nameError={this.state.formChecks?.nameCheck}
//           surnameError={this.state.formChecks?.surnameCheck}
//         />
//         <DateAndSelectInputs
//           dateRef={this.dateRef}
//           selectRef={this.selectRef}
//           dateError={this.state.formChecks?.dateCheck}
//           selectError={this.state.formChecks?.selectCheck}
//         />
//         <Radiobutton
//           values={[
//             ['Male', this.radioMaleRef],
//             ['Woman', this.radioWomanRef],
//             ['Other', this.radioOtherRef],
//           ]}
//           name={'sex'}
//           title={'Sex:'}
//         />
//         {this.state.formChecks?.radioCheck && (
//           <ErrorMessage text={this.state.formChecks?.radioCheck} />
//         )}
//         <ImageInput imageInputRef={this.imageLoadRef} getImage={this.getImage} />
//         {this.state.formChecks?.imageInputCheck && (
//           <ErrorMessage text={this.state.formChecks?.imageInputCheck} />
//         )}
//         <Checkbox
//           value={'terms'}
//           text={'I accept terms and conditions'}
//           checkboxRef={this.checkboxTermsRef}
//         />
//         {this.state.formChecks?.checkboxCheck && (
//           <ErrorMessage text={this.state.formChecks?.checkboxCheck} />
//         )}
//         <Checkbox
//           value={'notification'}
//           text={'I agree to get notifications'}
//           checkboxRef={this.checkboxNotificationRef}
//         />
//         <Button
//           onClck={(e: React.MouseEvent) => {
//             e.preventDefault();
//             this.openModal();
//           }}
//           text={'Submit'}
//         />
//         {this.state.openModal && (
//           <Modal closeModal={this.closeModal}>
//             <CardAdded closeModal={this.closeModal} />
//           </Modal>
//         )}
//       </form>
//     );
//   }
// }

const Form = (props: IProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CardFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState('');
  const [data, setData] = useState({} as CardFormData);
  const getImage = (file: FileList | null | undefined) => {
    if (file) {
      const image = URL.createObjectURL(file[0]);
      setImage(image);
    }
  };

  const openModalFunc = (data: CardFormData) => {
    setData(data);
    getImage(data.inputImage);
    setOpenModal(true);
  };

  const closeModal = () => {
    console.log(data);
    const objectData: CardWithUsers = {
      name: data.name + ' ' + data.surname,
      date: data.birthdate,
      profession: data.professionSelect,
      sex: data.radioSex,
      image: image,
      agreeGetNotification: data.notificationCheckbox,
    };
    props.setCard(objectData);
    reset();
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(openModalFunc)}>
      <NameAndSurnameInputs
        nameRef={register}
        surnameRef={register}
        nameError={errors?.name?.message?.toString()}
        surnameError={errors?.surname?.message?.toString()}
      />
      <DateAndSelectInputs
        dateRef={register}
        selectRef={register}
        dateError={errors?.birthdate?.message?.toString()}
        selectError={errors?.professionSelect?.message?.toString()}
      />
      <Radiobutton
        values={['Male', 'Woman', 'Other']}
        name={'sex'}
        title={'Sex:'}
        register={register}
        radioError={errors?.radioSex?.message?.toString()}
      />
      {errors?.radioSex?.message && <ErrorMessage text={errors?.radioSex?.message?.toString()} />}
      <ImageInput imageInputRef={register} getImage={getImage} />
      {errors?.inputImage?.message && (
        <ErrorMessage text={errors?.inputImage?.message?.toString()} />
      )}
      <Checkbox
        value={'terms'}
        text={'I accept terms and conditions'}
        checkboxRef={register}
        required={{ required: 'Accept the agreement' }}
      />
      {errors?.termsCheckbox?.message && (
        <ErrorMessage text={errors?.termsCheckbox?.message?.toString()} />
      )}
      <Checkbox
        value={'notification'}
        text={'I agree to get notifications'}
        checkboxRef={register}
      />
      <Button text={'Submit'} type={'submit'} />
      {openModal && (
        <Modal closeModal={closeModal}>
          <CardAdded closeModal={closeModal} />
        </Modal>
      )}
    </form>
  );
};

export default Form;
