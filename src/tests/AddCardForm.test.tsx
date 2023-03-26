import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddCardForm from '../pages/AddCardForm';

describe('AddCardForm', () => {
  test('Should render AddCardForm component', async () => {
    render(<AddCardForm />);
    expect(screen.getByText('Create card')).toBeDefined();
  });
});
