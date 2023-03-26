import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('AddCardForm', () => {
  test('Should render header component', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Main page')).toBeDefined();
    expect(screen.getByText('About us')).toBeDefined();
  });
});
