import React, { useState } from 'react';
import '../styles/AddCardForm.css';
import CardsWithUsers from '../components/CardsWithUsers/CardsWithUsers';
import Form from '../components/Form/Form';
import { CardWithUsers } from '../types/CardWithUsers';

const AddCardForm = () => {
  const [cards, setCards] = useState<CardWithUsers[]>([]);

  const setCard = (objectData: CardWithUsers) => {
    setCards([...cards, objectData]);
  };

  return (
    <div className="create-card__container">
      <h2 className="create-card__header">Create card</h2>
      <Form setCard={setCard} />
      <CardsWithUsers cards={cards} />
    </div>
  );
};

export default AddCardForm;
