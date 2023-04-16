import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/APIResponse';

interface CardsState {
  cards: Item[];
  isLoading: boolean;
  isCardEnd: boolean;
  isCardsLoading: boolean;
  previousSearchQuery: string;
  page: number;
}

const initialState: CardsState = {
  cards: [],
  isLoading: true,
  isCardEnd: false,
  isCardsLoading: true,
  previousSearchQuery: 'empty',
  page: 0,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getFilteredCards(state, action: PayloadAction<string>) {
      if (state.previousSearchQuery === action.payload) {
        return;
      }
      console.log(action.payload);
      state.cards = [];
      state.previousSearchQuery = action.payload;
      state.page = 0;
      state.isCardEnd = true;
      state.isLoading = true;
    },
    addCards(state, action: PayloadAction<[string, Item[]]>) {
      state.previousSearchQuery = action.payload[0];
      state.cards.push(...action.payload[1]);
      state.isCardsLoading = false;
      state.isLoading = false;
      state.isCardEnd = action.payload[1].length <= 7;
    },
    setDownloadState(state) {
      state.cards = [];
      state.page = 0;
      state.isCardEnd = true;
      state.isCardsLoading = true;
      state.isLoading = true;
    },
    getMoreCards(state) {
      state.isLoading = true;
      state.isCardsLoading = true;
      state.page += 8;
    },
  },
});

export default cardsSlice.reducer;
