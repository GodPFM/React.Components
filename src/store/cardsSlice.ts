import * as toolkitRaw from '@reduxjs/toolkit';
// @ts-ignore
const { createSlice } = ((toolkitRaw as never).default ?? toolkitRaw) as typeof toolkitRaw;
import { Item } from '../types/APIResponse';
import { fetchAllCards } from '../API/ProductsServes';

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.previousSearchQuery = action.payload[0];
        if (action.payload[2]) {
          state.cards = action.payload[1];
          state.page = 0;
        } else {
          state.cards.push(...action.payload[1]);
        }
        state.isCardsLoading = false;
        state.isLoading = false;
        state.isCardEnd = action.payload[1].length <= 7;
        state.page += 8;
      })
      .addCase(fetchAllCards.pending, (state) => {
        state.isCardEnd = true;
        state.isCardsLoading = true;
        state.isLoading = true;
      });
  },
});

export default cardsSlice.reducer;
