import { vi } from 'vitest';
import ProductsServes from '../API/ProductsServes';
import { Item } from '../types/APIResponse';
import { Attributes } from 'react';

vi.mock('../API/ProductsServes');

vi.spyOn(ProductsServes, 'getCards').mockImplementation(async () => {
  const items: Promise<Item[]> = new Promise((resolve) => {
    resolve([
      {
        article: 1297914,
        brand: 'ASOS Petite',
        category: 'Jeans',
        updatedAt: '01-01-2023',
        description:
          'Dropped waist Hip-hugging Hidden fly Pockets Slim fit Thigh-to-ankle tight fit',
        id: 'QASkGFmJGf',
        images: [
          'https://images.asos-media.com/products/sinie-dzhin…ign-petite-whitby/10038139-1-veneziablue?wid=3000',
          'https://images.asos-media.com/products/sinie-dzhin…iej-asos-design-petite-whitby/10038139-2?wid=3000',
          'https://images.asos-media.com/products/sinie-dzhin…iej-asos-design-petite-whitby/10038139-3?wid=3000',
          'https://images.asos-media.com/products/sinie-dzhin…iej-asos-design-petite-whitby/10038139-4?wid=3000',
        ],
        price: 2690,
        sold: 121,
        stock: 720,
        title: 'ASOS DESIGN Petite Whitby low waist skinny jeans in blue',
      },
    ]);
  });
  await items;
  return items;
});

vi.spyOn(ProductsServes, 'getById').mockImplementation(async (id) => {
  const item: Promise<Attributes | false> = new Promise((resolve) => {
    resolve({
      article: 1297914,
      brand: 'ASOS Petite',
      category: 'Jeans',
      updatedAt: '01-01-2023',
      description: 'Dropped waist Hip-hugging Hidden fly Pockets Slim fit Thigh-to-ankle tight fit',
      id: 'QASkGFmJGf',
      images: [
        'https://images.asos-media.com/products/sinie-dzhin…ign-petite-whitby/10038139-1-veneziablue?wid=3000',
        'https://images.asos-media.com/products/sinie-dzhin…iej-asos-design-petite-whitby/10038139-2?wid=3000',
        'https://images.asos-media.com/products/sinie-dzhin…iej-asos-design-petite-whitby/10038139-3?wid=3000',
        'https://images.asos-media.com/products/sinie-dzhin…iej-asos-design-petite-whitby/10038139-4?wid=3000',
      ],
      price: 2690,
      sold: 121,
      stock: 720,
      title: 'ASOS DESIGN Petite Whitby low waist skinny jeans in blue',
    } as Attributes);
  });
  await item;
  return id === '-1' ? false : item;
});
