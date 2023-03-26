import React, { Component } from 'react';
import classes from './ImageInput.module.css';
import ErrorMessage from '../errorMessage/ErrorMessage';

interface IProps {
  imageInputRef: React.Ref<HTMLInputElement> | null | undefined;
  getImage: (file: FileList) => void;
}

interface IState {
  isError: boolean | string;
  imageName?: string;
}

class ImageInput extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isError: false,
      imageName: 'Choose image',
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    if (target) {
      if (target.files && target.files[0]) {
        if (target.files[0].size > 3145728) {
          this.setState({ isError: 'Size > 3MB' });
          return;
        } else {
          const fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
          const extension = target.files[0].name.split('.').pop()?.toLowerCase();
          if (extension && fileTypes.includes(extension)) {
            this.setState({ isError: false, imageName: target.files[0].name });
            this.props.getImage(target.files);
          } else {
            this.setState({ isError: 'Wrong type of file' });
          }
        }
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
              accept="image/png, image/jpg, image/jpeg, image/gif"
              ref={this.props.imageInputRef}
            />
            <span className={classes.imageInput__text}>{this.state.imageName}</span>
          </label>
        </div>
        {this.state.isError && <ErrorMessage text={this.state.isError} />}
      </div>
    );
  }
}

export default ImageInput;
