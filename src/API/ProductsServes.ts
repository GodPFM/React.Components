import axios from 'axios';
import { Item } from '../types/APIResponse';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default class ProductsServes {
  static async getCards(limit = 12, offset = 0, filter = '') {
    const response = await axios.get<Item[]>('https://api.escuelajs.co/api/v1/products/', {
      params: {
        offset: offset,
        limit: limit,
        title: filter,
      },
    });
    return response;
  }

  static async getById(id: string) {
    try {
      const response = await axios.get<Item>(`https://api.escuelajs.co/api/v1/products/${id}`);
      return response;
    } catch {
      return false;
    }
  }
}

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (build) => ({
    fetchAllCards: build.query<Item[], { limit: number; offset: number; filter: string }>({
      query: ({ limit = 12, offset = 0, filter = '' }) => ({
        url: '/products',
        params: {
          offset: offset,
          limit: limit,
          title: filter,
        },
      }),
    }),
  }),
});
