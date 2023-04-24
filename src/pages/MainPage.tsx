import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../styles/MainPage.css';
import { cardsAPI } from '../API/ProductsServes';
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
  const navigate = useNavigate();

  const { value } = useAppSelector((state) => state.searchReducer);
  const { cards, isLoading, isCardsLoading, isCardEnd, page } = useAppSelector(
    (state) => state.cardsReducer
  );
  const { setDownloadState, addCards, getMoreCards } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [trigger, { data }] = cardsAPI.useLazyFetchAllCardsQuery();

  useEffect(() => {
    dispatch(setDownloadState());
    trigger({
      limit: 8,
      offset: 0,
      filter: value,
    });
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(addCards([value, data]));
    }
  }, [data]);

  const getMoreCardsFnc = async () => {
    await dispatch(getMoreCards());
    trigger({
      limit: 8,
      offset: page + 8,
      filter: value,
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate('/');
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="mainPage">
        <SearchField />
        <CardsContainer products={cards} isCardsLoading={isLoading} openModal={openModal} />
        {isLoading && <Loader />}
        {!isLoading && cards.length === 0 && <p>Products not found</p>}
        {!isCardEnd && !isCardsLoading && (
          <Button text={'Download more'} onClck={getMoreCardsFnc}></Button>
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
