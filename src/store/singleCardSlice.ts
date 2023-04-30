import * as toolkitRaw from '@reduxjs/toolkit';
// @ts-ignore
const { createSlice } = ((toolkitRaw as never).default ?? toolkitRaw) as typeof toolkitRaw;
import { Item } from '../types/APIResponse';
import { fetchSingleCard } from '../API/ProductsServes';

interface CardState {
  data: Item | undefined;
  isLoading: boolean;
  isError: boolean;
}

const initialState: CardState = {
  data: undefined,
  isLoading: true,
  isError: false,
};

export const singleCardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCard.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchSingleCard.pending, (state) => {
        state.data = undefined;
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSingleCard.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default singleCardSlice.reducer;
