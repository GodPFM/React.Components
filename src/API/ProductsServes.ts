import axios from 'axios';
import { Item } from '../types/APIResponse';

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
