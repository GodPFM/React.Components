import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../styles/MainPage.css';
import ProductsServes, { cardsAPI } from '../API/ProductsServes';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loading/Loader';
import SearchField from '../components/SearchField/SearchField';
import CardsContainer from '../components/CardsContainer';
import Modal from '../components/UI/Modal/Modal';
import CardWithProduct from '../components/CardWithProduct/CardWithProduct';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { cardsSlice } from '../store/cardsSlice';

interface IProps {
  isModalOpen: boolean;
}

function MainPage(props: IProps) {
  const [modalOpen, setModalOpen] = useState(props.isModalOpen);
  // const [isLoading, setIsLoading] = useState(true);
  const [isCardsLoading, setIsCardsLoading] = useState(true);
  // const [products, setProducts] = useState([] as Item[]);
  const [page, setPage] = useState(0);
  const [isCardEnd, setIsCardEnd] = useState(false);
  const [searchQuery, setSearchQuery] = useState('empty');
  const navigate = useNavigate();

  const { value } = useAppSelector((state) => state.searchReducer);
  const { cards, isLoading } = useAppSelector((state) => state.cardsReducer);
  const { setDownloadState, addCards } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [trigger, { data }] = cardsAPI.useLazyFetchAllCardsQuery();

  useLayoutEffect(() => {
    dispatch(setDownloadState());
    trigger({
      limit: 12,
      offset: 0,
      filter: value,
    });
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(addCards([value, data]));
    }
  }, [data]);

  const getItems = async (page: number, filter = '') => {
    return await ProductsServes.getCards(12, page, filter);
  };

  const getMoreCards = async () => {
    // setIsLoading(true);
    setIsCardsLoading(true);
    const items = await getItems(page + 12, searchQuery);
    setPage(page + 12);
    // setProducts([...products, ...items.data]);
    if (items.data.length < 12 || items.data.length === 0) {
      setIsCardEnd(true);
    }
    // setIsLoading(false);
    setIsCardsLoading(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate('/');
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const getFilterCards = async (value: string) => {
    if (searchQuery === value) {
      return;
    }
    // await setProducts([]);
    await setSearchQuery(value);
    await setPage(0);
    setIsCardEnd(true);
    // setIsLoading(true);
    const items = await getItems(0, value);
    // setProducts([...items.data]);
    // setIsLoading(false);
    if (!(items.data.length <= 11)) {
      setIsCardEnd(false);
      setIsCardsLoading(false);
    }
  };

  return (
    <div>
      <div className="mainPage">
        <SearchField downloadFilteredCards={getFilterCards} />
        <CardsContainer products={cards} isCardsLoading={isLoading} openModal={openModal} />
        {isLoading && <Loader />}
        {!isLoading && cards.length === 0 && <p>Products not found</p>}
        {!isCardEnd && !isCardsLoading && (
          <Button text={'Download more'} onClck={getMoreCards}></Button>
        )}
      </div>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <CardWithProduct closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default MainPage;
