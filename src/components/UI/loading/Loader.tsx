import React from 'react';
import classes from './Loader.module.css';
import LoaderSvg from '../../../assets/images/loading.svg';

const Loader = () => {
  return (
    <div className={classes.loader__container}>
      <img className={classes.loader} src={LoaderSvg as unknown as string} alt="Loader svg" />
    </div>
  );
};

export default Loader;
