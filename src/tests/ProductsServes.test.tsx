import { describe, expect, test, vi } from 'vitest';
import ProductsServes from '../API/ProductsServes';
import { Item } from '../types/APIResponse';
import { Attributes } from 'react';

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
    expect(response.length).toBe(1);
    const anotherData = await ProductsServes.getCards(1);
    expect(anotherData.length).toBe(1);
  });
});
