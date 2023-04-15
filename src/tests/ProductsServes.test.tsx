import { describe, expect, test } from 'vitest';
import ProductsServes from '../API/ProductsServes';

describe('Products serves', () => {
  test('returns false on -1', async () => {
    const response = await ProductsServes.getById('-1');
    expect(response).toBe(false);
  });
  test('returns object by id', async () => {
    const response = await ProductsServes.getById('37');
    expect(typeof response).toBe('object');
    if (typeof response !== 'boolean') {
      expect(response).toBeDefined();
    }
  });
  test('returns array of products', async () => {
    const response = await ProductsServes.getCards();
    expect(response.data[0].id).toBe(15);
  });
});
