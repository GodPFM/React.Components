import React, { Component } from 'react';
import classes from './Input.module.css';

interface IProps {
  name?: string;
  placeholder: string;
  labelForInput?: string;
  type?: string;
  inputRef?: React.Ref<HTMLInputElement> | null | undefined;
}
interface IState {
  inputValue: string;
}

class Input extends Component<IProps, IState> {
  private type: string;
  constructor(props: IProps) {
    super(props);
    this.type = this.props.type ? this.props.type : 'text';
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.currentTarget.value });
  }

  componentDidMount() {
    const value = localStorage.getItem(`${this.props.name}Input`);
    if (value) {
      this.setState({ inputValue: value });
    } else {
      this.setState({ inputValue: '' });
    }
    window.addEventListener('beforeunload', this.handleWindowBeforeUnload);
  }

  handleWindowBeforeUnload = () => {
    const value = this.state.inputValue;
    localStorage.setItem(`${this.props.name}Input`, value);
  };

  componentWillUnmount() {
    const value = this.state.inputValue;
    window.removeEventListener('beforeunload', this.handleWindowBeforeUnload);
    localStorage.setItem(`${this.props.name}Input`, value);
  }

  render() {
    return (
      <div className={classes.searchInput__container}>
        {this.props.labelForInput && (
          <label htmlFor={this.props.name}>{this.props.labelForInput}</label>
        )}
        <input
          className={classes.searchInput}
          ref={this.props.inputRef}
          value={this.state.inputValue}
          onInput={this.handleChange}
          placeholder={this.props.placeholder}
          name={this.props.name}
          id={this.props.name}
          type={this.type}
        />
      </div>
    );
  }
}
export default Input;
