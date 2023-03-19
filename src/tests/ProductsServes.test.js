import { describe, expect, test } from 'vitest';
import ProductsServes from '../API/ProductsServes';
describe('Products serves', () => {
    test('returns false on -1', async () => {
        const response = await ProductsServes.getById('-1');
        expect(response).toBe(false);
    });
    test('returns object by id', async () => {
        const response = await ProductsServes.getById('23');
        expect(typeof response).toBe('object');
        if (typeof response !== 'boolean') {
            expect(response.data.id).toBe(23);
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
