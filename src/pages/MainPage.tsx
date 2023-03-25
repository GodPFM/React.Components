import React, { Component } from 'react';
import '../styles/MainPage.css';
import { IApiResponse } from '../types/APIResponse';
import ProductsServes from '../API/ProductsServes';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loading/Loader';
import SearchField from '../components/SearchField/SearchField';
import CardsContainer from '../components/CardsContainer';
import Modal from '../components/UI/Modal/Modal';
import AddCardForm from './AddCardForm';

interface IState {
  isLoading: boolean;
  isCardsLoading: boolean;
  products: IApiResponse[];
  page: number;
  isModalOpen: boolean;
}

interface IProps {
  isOpenCreateCards?: boolean;
}

class MainPage extends Component<IProps, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoading: true,
      isCardsLoading: true,
      products: [],
      page: 0,
      isModalOpen: this.props.isOpenCreateCards ? true : false,
    };
    this.getMoreCards = this.getMoreCards.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const items = await this.getItems(this.state.page);
    if (items) {
      if (items.data) {
        this.setState({
          ...this.state,
          isCardsLoading: false,
          isLoading: false,
          products: items.data,
        });
      }
    }
  }

  async getItems(page: number) {
    return await ProductsServes.getAll(12, page);
  }

  async getMoreCards() {
    this.setState({ ...this.state, isLoading: true });
    const items = await this.getItems(this.state.page + 12);
    this.setState({
      ...this.state,
      page: this.state.page + 12,
      products: [...this.state.products, ...items.data],
      isLoading: false,
    });
  }

  openModal() {
    this.setState({ ...this.state, isModalOpen: true });
  }

  closeModal() {
    this.setState({ ...this.state, isModalOpen: false });
  }

  render() {
    return (
      <div className="mainPage">
        <SearchField openModal={this.openModal} />
        <CardsContainer products={this.state.products} isCardsLoading={this.state.isLoading} />
        {this.state.isLoading && <Loader />}
        {this.state.page < 188 && !this.state.isCardsLoading && (
          <Button text={'Download more'} onClck={() => this.getMoreCards()}></Button>
        )}
        {this.state.isModalOpen && (
          <Modal closeModal={this.closeModal}>
            <AddCardForm />
          </Modal>
        )}
      </div>
    );
  }
}

export default MainPage;
