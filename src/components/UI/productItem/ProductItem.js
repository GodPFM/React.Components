import React, { Component } from 'react';
import classes from './ProductItem.module.css';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return React.createElement(
      Link,
      { to: '/product/' + this.props.product.id, className: classes.item },
      React.createElement('img', {
        className: classes.item__image,
        src: this.props.product.images?.[0],
        alt: '',
      }),
      React.createElement('h2', { className: classes.item__title }, this.props.product.title),
      React.createElement(
        'p',
        { className: classes.item__description },
        this.props.product.description
      ),
      React.createElement('p', null, this.props.product.price, '$')
    );
  }
}
export default ProductItem;
