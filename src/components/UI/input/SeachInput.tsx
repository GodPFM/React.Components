import React, { Component } from 'react';
import classes from './SeachInput.module.css';

interface IProps {
  name?: string;
}
interface IState {
  inputValue: string;
}

class SeachInput extends Component<IProps, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.currentTarget.value });
  }

  componentDidMount() {
    const value = localStorage.getItem('searchInput');
    if (value) {
      this.setState({ inputValue: value });
    } else {
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
    return (
      <div className={classes.searchInput__container}>
        <input
          className={classes.searchInput}
          value={this.state.inputValue}
          onInput={this.handleChange}
          placeholder="Search"
          type="text"
        />
      </div>
    );
  }
}
export default SeachInput;
