import React, { Component } from 'react';
import '../styles/MainPage.css';
import { IApiResponse } from '../types/APIResponse';
import ProductsServes from '../API/ProductsServes';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loading/Loader';
import SearchField from '../components/SearchField/SearchField';
import CardsContainer from '../components/CardsContainer';

interface IState {
  isLoading: boolean;
  isCardsLoading: boolean;
  products: IApiResponse[];
  page: number;
}

interface IProps {
  test?: string;
}

class MainPage extends Component<IProps, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoading: true,
      isCardsLoading: true,
      products: [],
      page: 0,
    };
    this.getMoreCards = this.getMoreCards.bind(this);
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
    this.setState({ ...this.state, isCardsLoading: true });
    const items = await this.getItems(this.state.page + 12);
    this.setState({
      ...this.state,
      page: this.state.page + 12,
      products: [...this.state.products, ...items.data],
      isCardsLoading: false,
    });
  }

  render() {
    return (
      <div className="mainPage">
        <SearchField />
        {this.state.isLoading && <Loader />}
        <CardsContainer products={this.state.products} isCardsLoading={this.state.isLoading} />
        {this.state.isCardsLoading && <Loader />}
        {this.state.page < 188 && !this.state.isCardsLoading && (
          <Button text={'Download more'} onClck={() => this.getMoreCards()}></Button>
        )}
      </div>
    );
  }
}

export default MainPage;
