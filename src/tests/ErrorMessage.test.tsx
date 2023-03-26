import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/UI/errorMessage/ErrorMessage';

describe('Error message', () => {
  test('Should render about component', async () => {
    render(<ErrorMessage text={'Error message'} />);
    expect(screen.getByText('Error message')).toBeDefined();
  });
});
