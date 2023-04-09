import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CardWithProduct from '../components/CardWithProduct/CardWithProduct';

describe('Card with product', () => {
  test('Render with wrong id', async () => {
    Object.defineProperty(window, 'location', {
      get() {
        return { pathname: '/products/-1' };
      },
    });
    render(<CardWithProduct closeModal={() => {}} />);
    await waitFor(() => {
      expect(screen.getByRole('img')).toBeDefined();
    });
    expect(screen.getByText('Product not found')).toBeDefined();
  });
  test('Render with right id', async () => {
    Object.defineProperty(window, 'location', {
      get() {
        return { pathname: '/products/37' };
      },
    });
    render(<CardWithProduct closeModal={() => {}} />);
    await waitFor(() => {
      expect(screen.getByRole('img')).toBeDefined();
    });
    expect(screen.getByText('ASOS Petite')).toBeDefined();
  });
});
