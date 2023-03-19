import React, { Component } from 'react';
import '../styles/MainPage.css';
import SeachInput from '../components/UI/input/SeachInput';
import ProductsServes from '../API/ProductsServes';
import ProductItem from '../components/UI/productItem/ProductItem';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loading/Loader';
class MainPage extends Component {
    constructor(props) {
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
    async getItems(page) {
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
        return (React.createElement("div", { className: "mainPage" },
            React.createElement(SeachInput, null),
            this.state.isLoading && React.createElement(Loader, null),
            React.createElement("div", { className: "items__container" },
                this.state.products.map((item) => (React.createElement(ProductItem, { product: item, key: item.id }))),
                this.state.isCardsLoading && React.createElement(Loader, null)),
            this.state.page < 188 && !this.state.isCardsLoading && (React.createElement(Button, { text: 'Download more', onClck: () => this.getMoreCards() }))));
    }
}
export default MainPage;
