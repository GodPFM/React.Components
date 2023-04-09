import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductItem from '../components/UI/productItem/ProductItem';
import { BrowserRouter } from 'react-router-dom';

describe('Product item', () => {
  test('Must render product', async () => {
    const data = {
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
    };
    render(<ProductItem product={data} openModalFunc={() => {}} />, { wrapper: BrowserRouter });
    expect(screen.getByText('483$')).toBeDefined();
  });
});
