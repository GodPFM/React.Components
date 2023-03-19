import React, { Component } from 'react';
import '../styles/MainPage.css';
import PropTypes from 'prop-types';
import SeachInput from '../components/UI/input/SeachInput';
import { IApiResponse } from '../types/APIResponse';
import ProductsServes from '../API/ProductsServes';
import ProductItem from '../components/UI/productItem/ProductItem';
import Button from '../components/UI/button/Button';

interface IState {
  isLoading: boolean;
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
    const items = await this.getItems(this.state.page + 12);
    this.setState({
      ...this.state,
      page: this.state.page + 12,
      products: [...this.state.products, ...items.data],
    });
  }

  render() {
    return (
      <div className="mainPage">
        <SeachInput />
        {this.state.isLoading && <h2>Загрузка</h2>}
        <div className="items__container">
          {this.state.products.map((item) => (
            <ProductItem product={item} key={item.id} />
          ))}
        </div>
        {this.state.page < 188 && (
          <Button text={'Download more'} onClck={() => this.getMoreCards()}></Button>
        )}
      </div>
    );
  }
}

export default MainPage;
