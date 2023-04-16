import React from 'react';
import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import AddCardForm from '../pages/AddCardForm';
import { renderWithProviders } from './setupTests';

describe('AddCardForm', () => {
  test('Should render AddCardForm component', async () => {
    renderWithProviders(<AddCardForm />);
    expect(screen.getByText('Create card')).toBeDefined();
  });
});
