import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import ProductPage from '../pages/ProductPage';

describe('Products page', () => {
  test('Must render product page', async () => {
    Object.defineProperty(window, 'location', {
      get() {
        return { pathname: '/products/23' };
      },
    });
    console.log(window.location);
    render(<ProductPage />);
    await waitFor(
      () => {
        expect(screen.getByText(/Category/gi)).toBeDefined();
      },
      { timeout: 5000 }
    );
  });
});
