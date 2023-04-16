import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductItem from '../components/UI/productItem/ProductItem';
import { BrowserRouter } from 'react-router-dom';

describe('Product item', () => {
  test('Must render product', async () => {
    const data = {
      id: 15,
      title: 'Modern Plastic Sausages',
      price: 719,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: [
        'https://picsum.photos/640/640?r=1682',
        'https://picsum.photos/640/640?r=6407',
        'https://picsum.photos/640/640?r=3409',
      ],
      creationAt: '2023-04-14T08:53:29.000Z',
      updatedAt: '2023-04-14T08:53:29.000Z',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://picsum.photos/640/640?r=8803',
        creationAt: '2023-04-14T08:53:29.000Z',
        updatedAt: '2023-04-14T08:53:29.000Z',
      },
    };
    render(<ProductItem product={data} openModalFunc={() => {}} />, { wrapper: BrowserRouter });
    expect(screen.getByText('719$')).toBeDefined();
  });
});
