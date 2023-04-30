import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import Input from '../components/UI/input/Input';
import { renderWithProviders } from './setupTests';

describe('Search input', () => {
  test('Should display entered values', async () => {
    renderWithProviders(<Input isNeedSave={true} placeholder={'Search'} />);
    const element = screen.getByDisplayValue('');
    fireEvent.input(element, {
      target: {
        value: 'test',
      },
    });
    expect(screen.getByDisplayValue('test'));
  });
});
