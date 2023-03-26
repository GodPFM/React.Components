import React, { Component } from 'react';
import classes from './ImageInput.module.css';

interface IProps {
  imageInputRef: React.Ref<HTMLInputElement> | null | undefined;
  getImage: (file: FileList) => void;
}

class ImageInput extends Component<IProps> {
  render() {
    return (
      <div className={classes.imageInput__wrapper}>
        <div>
          <label className={classes.imageInput__container}>
            <input
              type="file"
              className={classes.imageInput__input}
              accept="image/png, image/jpg, image/jpeg, image/gif"
              ref={this.props.imageInputRef}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default ImageInput;
