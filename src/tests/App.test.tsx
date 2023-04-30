import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App', () => {
  test('renders links', () => {
    const newStore = store();
    render(
      <Provider store={newStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Main page')).toBeDefined();
  });
});
