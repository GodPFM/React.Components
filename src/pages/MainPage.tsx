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
  const [isCardEnd, setIsCardEnd] = useState(false);
  const [searchQuery, setSearchQuery] = useState('empty');
  // useEffect(() => {
  //   const getNewItems = async () => {
  //     const items = await getItems(page);
  //     if (items) {
  //       if (items.data) {
  //         setIsCardsLoading(false);
  //         setIsLoading(false);
  //         setProducts([...products, ...items.data]);
  //       }
  //     }
  //   };
  //   getNewItems();
  // }, []);

  const getItems = async (page: number, filter = '') => {
    return await ProductsServes.getCards(12, page, filter);
  };

  const getMoreCards = async () => {
    setIsLoading(true);
    setIsCardsLoading(true);
    const items = await getItems(page + 12, searchQuery);
    setPage(page + 12);
    setProducts([...products, ...items.data]);
    if (items.data.length < 12 || items.data.length === 0) {
      setIsCardEnd(true);
    }
    setIsLoading(false);
    setIsCardsLoading(false);
  };

  const getFilterCards = async (value: string) => {
    if (searchQuery === value) {
      return;
    }
    await setProducts([]);
    await setSearchQuery(value);
    await setPage(0);
    setIsCardEnd(true);
    setIsLoading(true);
    const items = await getItems(0, value);
    console.log(value, items.data);
    setProducts([...items.data]);
    setIsLoading(false);
    if (!(items.data.length < 12)) {
      setIsCardEnd(false);
    }
  };

  return (
    <div>
      <div className="mainPage">
        <SearchField downloadFiltredCards={getFilterCards} />
        <CardsContainer products={products} isCardsLoading={isLoading} />
        {isLoading && <Loader />}
        {!isLoading && products.length === 0 && <p>Products not found</p>}
        {!isCardEnd && !isCardsLoading && (
          <Button text={'Download more'} onClck={getMoreCards}></Button>
        )}
      </div>
    </div>
  );
}

export default MainPage;
