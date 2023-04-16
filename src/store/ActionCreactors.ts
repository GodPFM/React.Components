import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '../types/APIResponse';

type query = {
  limit: number;
  offset: number;
  filter: string;
};

export const fetchCards = createAsyncThunk('cards/fetchAll', async (queryObj: query, thunkAPI) => {
  const { limit = 12, offset = 0, filter = '' } = queryObj;
  try {
    const response = await axios.get<Item[]>('https://api.escuelajs.co/api/v1/products/', {
      params: {
        offset: offset,
        limit: limit,
        title: filter,
      },
    });
    return response;
  } catch {
    return false;
  }
});
