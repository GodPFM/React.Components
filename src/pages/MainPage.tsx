import React, { useEffect, useState } from 'react';
import '../styles/MainPage.css';
import { IApiResponse } from '../types/APIResponse';
import ProductsServes from '../API/ProductsServes';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loading/Loader';
import SearchField from '../components/SearchField/SearchField';
import CardsContainer from '../components/CardsContainer';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCardsLoading, setIsCardsLoading] = useState(true);
  const [products, setProducts] = useState([] as IApiResponse[]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getNewItems = async () => {
      const items = await getItems(page);
      if (items) {
        if (items.data) {
          setIsCardsLoading(false);
          setIsLoading(false);
          setProducts([...products, ...items.data]);
        }
      }
    };
    getNewItems();
  }, []);

  const getItems = async (page: number) => {
    return await ProductsServes.getAll(12, page);
  };

  const getMoreCards = async () => {
    setIsLoading(true);
    setIsCardsLoading(true);
    const items = await getItems(page + 12);
    setPage(page + 12);
    setProducts([...products, ...items.data]);
    setIsLoading(false);
    setIsCardsLoading(false);
  };

  return (
    <div>
      <div className="mainPage">
        <SearchField />
        <CardsContainer products={products} isCardsLoading={isLoading} />
        {isLoading && <Loader />}
        {page < 188 && !isCardsLoading && (
          <Button text={'Download more'} onClck={getMoreCards}></Button>
        )}
      </div>
    </div>
  );
}

export default MainPage;
