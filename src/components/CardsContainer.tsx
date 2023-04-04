import React from 'react';
import ProductItem from './UI/productItem/ProductItem';
import { IApiResponse } from '../types/APIResponse';

interface IProps {
  products: IApiResponse[];
  isCardsLoading: boolean;
}

const CardsContainer = (props: IProps) => {
  return (
    <div className="items__container">
      {props.products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
