import React, { Component } from 'react';
import classes from './ImageInput.module.css';

interface IProps {
  imageInputRef: React.Ref<HTMLInputElement> | null | undefined;
}

class ImageInput extends Component<IProps> {
  handleLoad(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    if (target) {
      if (target.files) {
        console.log(target.files);
      }
    }
  }
  render() {
    return (
      <div className={classes.imageInput__wrapper}>
        <div>
          <label className={classes.imageInput__container}>
            <input
              type="file"
              className={classes.imageInput__input}
              onChange={this.handleLoad}
              ref={this.props.imageInputRef}
            />
            <span className={classes.imageInput__text}>Choose image</span>
          </label>
        </div>
      </div>
    );
  }
}

export default ImageInput;
