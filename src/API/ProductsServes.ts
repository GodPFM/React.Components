import axios from 'axios';

export default class ProductsServes {
  static async getAll(limit = 12, offset = 0) {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products', {
      params: {
        offset: offset,
        limit: limit,
      },
    });
    console.log(response);
    return response;
  }

  static async getById(id: number) {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products/' + id);
    return response;
  }
}
