import React, { Component } from 'react';
import classes from './SeachInput.module.css';
class SeachInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ inputValue: event.currentTarget.value });
    }
    componentDidMount() {
        const value = localStorage.getItem('searchInput');
        if (value) {
            this.setState({ inputValue: value });
        }
        else {
            this.setState({ inputValue: '' });
        }
        window.addEventListener('beforeunload', this.handleWindowBeforeUnload);
    }
    handleWindowBeforeUnload = () => {
        const value = this.state.inputValue;
        localStorage.setItem('searchInput', value);
    };
    componentWillUnmount() {
        const value = this.state.inputValue;
        window.removeEventListener('beforeunload', this.handleWindowBeforeUnload);
        localStorage.setItem('searchInput', value);
    }
    render() {
        return (React.createElement("div", { className: classes.searchInput__container },
            React.createElement("input", { className: classes.searchInput, value: this.state.inputValue, onInput: this.handleChange, placeholder: "Search", type: "text" })));
    }
}
export default SeachInput;
