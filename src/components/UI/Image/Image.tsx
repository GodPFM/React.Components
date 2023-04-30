import React, { useEffect, useRef, useState } from 'react';
import classes from './Image.module.css';
import Loader from '../loading/Loader';

interface IProps {
  src: string;
}

const Image = (props: IProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isImageLoad, setIsImageLoad] = useState(false);
  useEffect(() => {
    if (imgRef.current?.complete) {
      loadImageHandler();
    }
  }, []);
  const loadImageHandler = () => {
    setIsImageLoad(true);
  };
  const hideImage = isImageLoad ? '' : classes.hideImage;
  const hideLoader = isImageLoad ? classes.hideImage : '';
  return (
    <div className={classes.image__container}>
      {!isImageLoad && (
        <div className={`${classes.image__loaderContainer} ${hideLoader}`} data-testid="loader">
          <Loader />
        </div>
      )}
      <img
        className={`${classes.image} ${hideImage}`}
        src={props.src}
        ref={imgRef}
        alt="Product image"
        onLoad={loadImageHandler}
        data-testid="image"
      />
    </div>
  );
};

export default Image;
