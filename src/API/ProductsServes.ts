import Parse from 'parse/dist/parse.min.js';
import { Item } from '../types/APIResponse';

export default class ProductsServes {
  static async getCards(limit = 12, offset = 0, filter = '') {
    const query: Parse.Query = new Parse.Query('Products');
    query.limit(limit);
    query.skip(offset);
    if (filter) {
      query.contains('title', filter);
    }
    try {
      const results: Parse.Object[] = await query.find();
      return results.map(({ id, attributes }) => ({ id, ...attributes } as Item));
    } catch (error) {
      throw Error('Error while fetching Products: ' + error);
    }
  }

  static async getById(id: string) {
    const query: Parse.Query = new Parse.Query('Products');
    query.equalTo('objectId', id);
    try {
      const results: Parse.Object[] = await query.find();
      return results[0].attributes;
    } catch {
      return false;
    }
  }
}
