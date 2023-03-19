import React, { Component } from 'react';
import { IApiResponse } from '../../../types/APIResponse';
import classes from './ProductItem.module.css';
import { Link, Navigate } from 'react-router-dom';

interface IState {
  test?: string;
}

interface IProps {
  product: IApiResponse;
  page?: number;
}

class ProductItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to={'/product/' + this.props.product.id} className={classes.item}>
        <img className={classes.item__image} src={this.props.product.images?.[0]} alt="" />
        <h2 className={classes.item__title}>{this.props.product.title}</h2>
        <p className={classes.item__description}>{this.props.product.description}</p>
        <p>{this.props.product.price}$</p>
      </Link>
    );
  }
}

export default ProductItem;
