import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Loader from '../UI/loading/Loader';
import Image from '../UI/Image/Image';
import { fetchSingleCard } from '../../API/ProductsServes';
import classes from './CardWithProduct.module.css';

interface IProps {
  closeModal: () => void;
  cardId: number;
}
const CardWithProduct = (props: IProps) => {
  const { data, isLoading, isError } = useAppSelector((state) => state.singleCardReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productId = props.cardId;
    if (Number(productId)) {
      dispatch(fetchSingleCard(Number(productId)));
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
