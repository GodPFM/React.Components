import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductItem from '../components/UI/productItem/ProductItem';
import { BrowserRouter } from 'react-router-dom';

describe('Product item', () => {
  test('Must render product', async () => {
    const data = {
      id: 23,
      title: 'Elegant Steel Chair',
      price: 483,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=5821',
        'https://api.lorem.space/image/watch?w=640&h=480&r=1621',
        'https://api.lorem.space/image/watch?w=640&h=480&r=2183',
      ],
      creationAt: '2023-03-19T02:45:57.000Z',
      updatedAt: '2023-03-19T02:45:57.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=2465',
        creationAt: '2023-03-19T02:45:57.000Z',
        updatedAt: '2023-03-19T02:45:57.000Z',
      },
    };
    render(<ProductItem product={data} />, { wrapper: BrowserRouter });
    expect(screen.getByText('483$')).toBeDefined();
  });
});
