import React, { Component } from 'react';
import '../styles/AddCardForm.css';
import { CardFormCheck } from '../types/CardForm';
import CardsWithUsers from '../components/CardsWithUsers/CardsWithUsers';
import Form from '../components/Form/Form';
import { CardWithUsers } from '../types/CardWithUsers';

class AddCardForm extends Component<object, CardFormCheck> {
  constructor(props: object) {
    super(props);
    this.setCard = this.setCard.bind(this);
    this.state = {
      cards: [],
      openModal: false,
    };
  }

  async setCard(objectData: CardWithUsers) {
    await this.setState({ cards: [...this.state.cards, objectData] });
  }

  render() {
    return (
      <div className="create-card__container">
        <h2 className="create-card__header">Create card</h2>
        <Form setCard={this.setCard} />
        <CardsWithUsers cards={this.state.cards} />
      </div>
    );
  }
}

export default AddCardForm;
