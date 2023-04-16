import React from 'react';
import '../styles/AddCardForm.css';
import CardsWithUsers from '../components/CardsWithUsers/CardsWithUsers';
import Form from '../components/Form/Form';
import { CardWithUsers } from '../types/CardWithUsers';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { formSlice } from '../store/formSlice';

const AddCardForm = () => {
  const { cards } = useAppSelector((state) => state.formCardsReducer);
  const { addCard } = formSlice.actions;
  const dispatch = useAppDispatch();

  const setCard = (objectData: CardWithUsers) => {
    dispatch(addCard(objectData));
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
