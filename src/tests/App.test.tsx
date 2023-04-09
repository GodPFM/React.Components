import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders links', () => {
    render(<App />);
    expect(screen.getByText('Main page')).toBeDefined();
  });
});
