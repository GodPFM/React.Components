import { describe, expect, test } from 'vitest';
import ProductsServes from '../API/ProductsServes';
import { waitFor } from '@testing-library/react';

describe('Products serves', () => {
  test('returns false on -1', async () => {
    const response = await ProductsServes.getById('-1');
    waitFor(
      () => {
        expect(response).toBe(false);
      },
      { timeout: 6000 }
    );
  });
  test('returns object by id', async () => {
    const response = await ProductsServes.getById('37');
    expect(typeof response).toBe('object');
    if (typeof response !== 'boolean') {
      expect(response.data.id).toBe(37);
    }
  });
  test('returns array of products', async () => {
    const response = await ProductsServes.getAll();
    const data = response.data;
    expect(data.length).toBe(12);
    const anotherResponse = await ProductsServes.getAll(1);
    const anotherData = anotherResponse.data;
    expect(anotherData.length).toBe(1);
  });
});
