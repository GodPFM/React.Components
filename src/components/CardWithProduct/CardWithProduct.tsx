import React from 'react';

interface IProps {
  closeModal: () => void;
}
const CardWithProduct = (props: IProps) => {
  // useEffect(() => {
  //   const productId = location.pathname.split('/').at(-1);
  //   if (productId) {
  //     trigger(Number(productId));
  //   }
  // }, []);

  return (
    <div>
      {/*{isLoading && <Loader />}*/}
      {/*{data && !isError && (*/}
      {/*  <div className={classes.product__container}>*/}
      {/*    <div className={classes.closeButtonContainer}>*/}
      {/*      <button className={classes.closeButton} onClick={props.closeModal}></button>*/}
      {/*    </div>*/}
      {/*    <div className={classes.image}>*/}
      {/*      <Image src={data.images?.[0] + '&fit=constrain'} />*/}
      {/*    </div>*/}
      {/*    <h2 className={classes.title}>{data.title}</h2>*/}
      {/*    <p>{data.description}</p>*/}
      {/*    <p>*/}
      {/*      <b>Category:</b> {data.category.name}*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      <b>Id:</b> {data.id}*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      <b>Price:</b> {data.price}$*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{isError && <p>Product not found</p>}*/}
    </div>
  );
};

export default CardWithProduct;
