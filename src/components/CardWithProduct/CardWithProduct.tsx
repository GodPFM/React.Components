import React, { useEffect } from 'react';
import Loader from '../UI/loading/Loader.js';
import { cardsAPI } from '../../API/ProductsServes.js';
import Image from '../UI/Image/Image.js';
import classes from './CardWithProduct.module.css';

interface IProps {
  closeModal: () => void;
}
const CardWithProduct = (props: IProps) => {
  const [trigger, { data, isError, isLoading }] = cardsAPI.useLazyFetchSingleCardQuery();

  useEffect(() => {
    const productId = location.pathname.split('/').at(-1);
    if (productId) {
      trigger(Number(productId));
    }
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {data && !isError && (
        <div className={classes.product__container}>
          <div className={classes.closeButtonContainer}>
            <button className={classes.closeButton} onClick={props.closeModal}></button>
          </div>
          <div className={classes.image}>
            <Image src={data.images?.[0] + '&fit=constrain'} />
          </div>
          <h2 className={classes.title}>{data.title}</h2>
          <p>{data.description}</p>
          <p>
            <b>Category:</b> {data.category.name}
          </p>
          <p>
            <b>Id:</b> {data.id}
          </p>
          <p>
            <b>Price:</b> {data.price}$
          </p>
        </div>
      )}
      {isError && <p>Product not found</p>}
    </div>
  );
};

export default CardWithProduct;
