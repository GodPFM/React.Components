import React, { MouseEvent, useState } from 'react';
import '../styles/MainPage.css';
import { fetchAllCards } from '../API/ProductsServes';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loading/Loader';
import SearchField from '../components/SearchField/SearchField';
import CardsContainer from '../components/CardsContainer';
import Modal from '../components/UI/Modal/Modal';
import CardWithProduct from '../components/CardWithProduct/CardWithProduct';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

interface IProps {
  isModalOpen: boolean;
}

function MainPage(props: IProps) {
  const [modalOpen, setModalOpen] = useState(props.isModalOpen);
  const [cardId, setCardId] = useState(0);

  const { value } = useAppSelector((state) => state.searchReducer);
  const { cards, isLoading, isCardsLoading, isCardEnd, page } = useAppSelector(
    (state) => state.cardsReducer
  );
  const dispatch = useAppDispatch();

  const getMoreCardsFnc = async () => {
    dispatch(fetchAllCards({ limit: 8, offset: page, filter: value }));
  };

  const closeModal = () => {
    setModalOpen(false);
    setCardId(0);
  };

  const openModal = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.dataset.id;
    if (id) {
      setCardId(Number(id));
      setModalOpen(true);
    }
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
          <CardWithProduct closeModal={closeModal} cardId={cardId} />
        </Modal>
      )}
    </div>
  );
}

export default MainPage;
