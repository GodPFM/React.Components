import React, { Component } from 'react';
import classes from './ImageInput.module.css';

class ImageInput extends Component {
  render() {
    return (
      <div className={classes.imageInput__wrapper}>
        <label className={classes.imageInput__container}>
          <input type="file" className={classes.imageInput__input} />
          <span className={classes.imageInput__text}>Choose image</span>
        </label>
      </div>
    );
  }
}

export default ImageInput;
