import { Item } from '../types/APIResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (build) => ({
    fetchAllCards: build.query<Item[], { limit: number; offset: number; filter: string }>({
      query: ({ limit = 8, offset = 0, filter = '' }) => ({
        url: '/products',
        params: {
          offset: offset,
          limit: limit,
          title: filter,
        },
      }),
    }),
    fetchSingleCard: build.query<Item, number>({
      query: (id: number) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});
