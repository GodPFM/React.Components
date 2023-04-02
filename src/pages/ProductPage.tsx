import React, { useEffect, useState } from 'react';
import { IApiResponse } from '../types/APIResponse';
import ProductsServes from '../API/ProductsServes';
import Loader from '../components/UI/loading/Loader';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<IApiResponse>();

  useEffect(() => {
    const id = location.pathname.split('/').at(-1);
    if (id) {
      const fetchData = async () => {
        const item = await ProductsServes.getById(id);
        setIsLoading(false);
        if (item) {
          setProduct(item.data);
        } else {
          setError(true);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div className="product__wrapper">
      {isLoading && <Loader />}
      {error && <h2>Product not found</h2>}
      {product && (
        <div className="product__container">
          <div className="product__image-container">
            {product.images?.map((item, index) => (
              <img className="product__image" src={item} alt="" key={index} />
            ))}
          </div>
          <div>
            <h2 className="product__title">{product.title}</h2>
            <p className="product__information">{product.description}</p>
            <p className="product__information">Category: {product.category.name}</p>
            <p className="product__information">Price: {product.price}$</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
