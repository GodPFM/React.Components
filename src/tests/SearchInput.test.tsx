import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../components/UI/input/Input';

describe('Search input', () => {
  test('Should display entered values', async () => {
    render(<Input />);
    const element = screen.getByDisplayValue('');
    fireEvent.input(element, {
      target: {
        value: 'test',
      },
    });
    expect(screen.getByDisplayValue('test'));
  });
  test('test');
});
