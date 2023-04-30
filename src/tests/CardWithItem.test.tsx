import React from 'react';
import { describe, expect, test } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import CardWithProduct from '../components/CardWithProduct/CardWithProduct';
import { renderWithProviders } from './setupTests';

describe('Card with product', () => {
  test('Render with wrong id', async () => {
    renderWithProviders(<CardWithProduct closeModal={() => {}} cardId={-1} />);
    await waitFor(() => {
      expect(screen.getByRole('img')).toBeDefined();
    });
    expect(screen.getByText('Product not found')).toBeDefined();
  });
  test('Render with right id', async () => {
    renderWithProviders(<CardWithProduct closeModal={() => {}} cardId={37} />);
    await waitFor(() => {
      expect(screen.getByText('Category:')).toBeDefined();
    });
    expect(screen.getByText('Category:')).toBeDefined();
  });
});
