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

const Form = (props: IProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CardFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      termsCheckbox: false,
      notificationCheckbox: false,
    },
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
