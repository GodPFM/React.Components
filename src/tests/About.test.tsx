import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About', () => {
  test('Should render about component', async () => {
    render(<About />);
    expect(screen.getByText(/Lorem/i)).toBeDefined();
  });
});
