import React, { Component } from 'react';
import ProductItem from './UI/productItem/ProductItem';
import Loader from './UI/loading/Loader';
import { IApiResponse } from '../types/APIResponse';

interface IProps {
  products: IApiResponse[];
  isCardsLoading: boolean;
}

class CardsContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div className="items__container">
        {this.props.products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
