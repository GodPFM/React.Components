import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardWithUsers } from '../types/CardWithUsers';

type initialState = {
  cards: Array<CardWithUsers>;
};

const initialState: initialState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardWithUsers>) {
      state.cards.push(action.payload);
    },
  },
});

export default formSlice.reducer;
