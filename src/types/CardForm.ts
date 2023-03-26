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
  cards: CardWithUsers[];
};
