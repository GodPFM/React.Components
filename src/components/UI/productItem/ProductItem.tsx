import React from 'react';
import { Item } from '../../../types/APIResponse';
import classes from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

interface IProps {
  product: Item;
  openModalFunc: () => void;
  page?: number;
}

const ProductItem = (props: IProps) => {
  return (
    <Link
      to={'/product/' + props.product.id}
      className={classes.item}
      onClick={props.openModalFunc}
    >
      <div className={classes.item__imageContainer}>
        <Image src={props.product.images?.[0] + '&fit=constrain'} />
      </div>
      <h2 className={classes.item__title}>{props.product.title}</h2>
      <p className={classes.item__description}>{props.product.description}</p>
      <p>{props.product.price}$</p>
    </Link>
  );
};

export default ProductItem;
