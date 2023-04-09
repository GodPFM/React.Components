import React, { useState } from 'react';
import classes from './Image.module.css';
import Loader from '../loading/Loader';

interface IProps {
  src: string;
}

const Image = (props: IProps) => {
  const [isImageLoad, setIsImageLoad] = useState(false);
  const loadImageHandler = () => {
    setIsImageLoad(true);
  };
  const hideImage = isImageLoad ? '' : classes.hideImage;
  const hideLoader = isImageLoad ? classes.hideImage : '';
  return (
    <div className={classes.image__container}>
      {!isImageLoad && (
        <div className={`${classes.image__loaderContainer} ${hideLoader}`}>
          <Loader />
        </div>
      )}
      <img
        className={`${classes.image} ${hideImage}`}
        src={props.src}
        alt="Product image"
        onLoad={loadImageHandler}
      />
    </div>
  );
};

export default Image;
