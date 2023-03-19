import React, { Component } from 'react';
import ProductsServes from '../API/ProductsServes';
import Loader from '../components/UI/loading/Loader';
import '../styles/ProductPage.css';
class ProductPage extends Component {
    id;
    constructor(props) {
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
    async getProduct(id) {
        const item = await ProductsServes.getById(id);
        if (item) {
            this.setState({ ...this.state, isLoading: false, product: item.data });
        }
        else {
            this.setState({ ...this.state, isLoading: false, error: true });
        }
    }
    render() {
        return (React.createElement("div", { className: "product__wrapper" },
            this.state.isLoading && React.createElement(Loader, null),
            this.state.error && React.createElement("h2", null, "Product not found"),
            this.state.product && (React.createElement("div", { className: "product__container" },
                React.createElement("div", { className: "product__image-container" }, this.state.product.images?.map((item, index) => (React.createElement("img", { className: "product__image", src: item, alt: "", key: index })))),
                React.createElement("div", null,
                    React.createElement("h2", { className: "product__title" }, this.state.product.title),
                    React.createElement("p", { className: "product__information" }, this.state.product.description),
                    React.createElement("p", { className: "product__information" },
                        "Category: ",
                        this.state.product.category.name),
                    React.createElement("p", { className: "product__information" },
                        "Price: ",
                        this.state.product.price,
                        "$"))))));
    }
}
export default ProductPage;
