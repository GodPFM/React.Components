import React, { Component } from 'react';
import classes from './Loader.module.css';
import LoaderSvg from '../../../assets/images/loading.svg';

class Loader extends Component {
  render() {
    return (
      <div className={classes.loader__container}>
        <img className={classes.loader} src={LoaderSvg as unknown as string} alt="" />
      </div>
    );
  }
}

export default Loader;
