import React, { Component } from 'react';
import { IApiResponse } from '../types/APIResponse';
import ProductsServes from '../API/ProductsServes';
import Loader from '../components/UI/loading/Loader';
import '../styles/ProductPage.css';

interface IState {
  isLoading: boolean;
  product?: IApiResponse;
  error: boolean;
}

interface IProps {
  test?: number;
}

class ProductPage extends Component<IProps, IState> {
  private id: string | undefined;
  constructor(props: object) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
    };
    this.id = location.pathname.split('/').at(-1);
    if (this.id) {
      this.getProduct(this.id);
    }
  }

  async getProduct(id: string) {
    const item = await ProductsServes.getById(id);
    if (item) {
      this.setState({ ...this.state, isLoading: false, product: item.data });
    } else {
      this.setState({ ...this.state, isLoading: false, error: true });
    }
  }

  render() {
    return (
      <div className="product__wrapper">
        {this.state.isLoading && <Loader />}
        {this.state.error && <h2>Product not found</h2>}
        {this.state.product && (
          <div className="product__container">
            <div className="product__image-container">
              {this.state.product.images?.map((item, index) => (
                <img className="product__image" src={item} alt="" key={index} />
              ))}
            </div>
            <div>
              <h2 className="product__title">{this.state.product.title}</h2>
              <p className="product__information">{this.state.product.description}</p>
              <p className="product__information">Category: {this.state.product.category.name}</p>
              <p className="product__information">Price: {this.state.product.price}$</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductPage;
