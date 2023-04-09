import React from 'react';
import ProductItem from './UI/productItem/ProductItem';
import { Item } from '../types/APIResponse';

interface IProps {
  products: Item[];
  isCardsLoading: boolean;
  openModal: () => void;
}

const CardsContainer = (props: IProps) => {
  return (
    <div className="items__container">
      {props.products.map((item) => (
        <ProductItem product={item} key={item.id} openModalFunc={props.openModal} />
      ))}
    </div>
  );
};

export default CardsContainer;
