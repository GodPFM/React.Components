import React, { useEffect, useState } from 'react';
import { Item } from '../../types/APIResponse';
import Loader from '../UI/loading/Loader';
import ProductsServes from '../../API/ProductsServes';
import Image from '../UI/Image/Image';
import classes from './CardWithProduct.module.css';

interface IProps {
  closeModal: () => void;
}
const CardWithProduct = (props: IProps) => {
  const [itemData, setItemData] = useState({} as Item);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getItem = async () => {
      const productId = location.pathname.split('/').at(-1);
      if (productId) {
        const itemData = await ProductsServes.getById(productId);
        if (itemData) {
          await setItemData(itemData.data as Item);
        } else {
          setError(true);
        }
        setLoadingData(false);
      }
    };
    getItem();
  }, []);
  return (
    <>
      {loadingData && <Loader />}
      {!loadingData && !error && (
        <div className={classes.product__container}>
          <div className={classes.closeButtonContainer}>
            <button className={classes.closeButton} onClick={props.closeModal}></button>
          </div>
          <div className={classes.image}>
            <Image src={itemData.images?.[0] + '&fit=constrain'} />
          </div>
          <h2 className={classes.title}>{itemData.title}</h2>
          <p>{itemData.description}</p>
          <p>
            <b>Category:</b> {itemData.category.name}
          </p>
          <p>
            <b>Id:</b> {itemData.id}
          </p>
          <p>
            <b>Price:</b> {itemData.price}$
          </p>
        </div>
      )}
      {error && <p>Product not found</p>}
    </>
  );
};

export default CardWithProduct;
