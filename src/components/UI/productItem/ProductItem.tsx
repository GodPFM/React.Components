import React, { useState } from 'react';
import { Item } from '../../../types/APIResponse';
import classes from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import Loader from '../loading/Loader';

interface IProps {
  product: Item;
  page?: number;
}

const ProductItem = (props: IProps) => {
  const [isImageLoad, setIsImageLoad] = useState(false);
  const loadImageHandler = () => {
    setIsImageLoad(true);
  };
  const hideImage = isImageLoad ? '' : classes.item__hideImage;
  const hideLoader = isImageLoad ? classes.item__hideImage : '';
  return (
    <Link to={'/product/' + props.product.id} className={classes.item}>
      {!isImageLoad && (
        <div className={`${classes.item__loaderContainer} ${hideLoader}`}>
          <Loader />
        </div>
      )}
      <img
        className={`${classes.item__image} ${hideImage}`}
        src={props.product.images?.[0]}
        alt="Product image"
        onLoad={loadImageHandler}
      />
      <h2 className={classes.item__title}>{props.product.title}</h2>
      <p className={classes.item__description}>{props.product.description}</p>
      <p>{props.product.price}$</p>
    </Link>
  );
};

export default ProductItem;
