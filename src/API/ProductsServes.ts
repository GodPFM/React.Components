import { Item } from '../types/APIResponse';
import { createAsyncThunk } from '@reduxjs/toolkit';
// export const cardsAPI = createApi({
//   reducerPath: 'cardsAPI',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
//   endpoints: (build) => ({
//     fetchAllCards: build.query<Item[], { limit: number; offset: number; filter: string }>({
//       query: ({ limit = 8, offset = 0, filter = '' }) => ({
//         url: '/products',
//         params: {
//           offset: offset,
//           limit: limit,
//           title: filter,
//         },
//       }),
//     }),
//     fetchSingleCard: build.query<Item, number>({
//       query: (id: number) => ({
//         url: `/products/${id}`,
//       }),
//     }),
//   }),
// });

export const fetchAllCards = createAsyncThunk<
  [string, Item[], boolean | undefined],
  { limit: number; offset: number; filter: string; isNewValue?: boolean },
  { rejectValue: string }
>('main/fetchAllCards', async ({ limit, offset, filter, isNewValue }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}&title=${filter}`
    );
    if (!response.ok) {
      return rejectWithValue(response.statusText);
    }

    const data = await response.json();

    return [filter, data, isNewValue];
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Error');
  }
});

export const fetchSingleCard = createAsyncThunk<Item, number, { rejectValue: string }>(
  'main/fetchSingleItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      if (!response.ok) {
        return rejectWithValue(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Error');
    }
  }
);
