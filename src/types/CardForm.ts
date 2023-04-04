import { CardWithUsers } from './CardWithUsers';

export type CardFormCheck = {
  formChecks?: {
    nameCheck: string | boolean;
    surnameCheck: string | boolean;
    dateCheck: string | boolean;
    selectCheck: string | boolean;
    checkboxCheck: string | boolean;
    radioCheck: string | boolean;
    imageInputCheck: string | boolean;
  };
  image?: string;
  openModal: boolean;
  cards: CardWithUsers[];
};

export type CardFormData = {
  birthdate: string;
  inputImage: FileList;
  name: string;
  notificationCheckbox: boolean;
  termsCheckbox: boolean;
  professionSelect: string;
  radioSex: string;
  surname: string;
};
