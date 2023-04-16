import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCardForm from '../pages/AddCardForm';
import { renderWithProviders } from './setupTests';

describe('AddCardForm', () => {
  test('Should render AddCardForm component', async () => {
    renderWithProviders(<AddCardForm />);
    expect(screen.getByText('Create card')).toBeDefined();
    expect(screen.getByRole('combobox')).toBeDefined();
  });
  test('Should show error message', async () => {
    const button = screen.getByText('Submit');
    expect(button).toBeDefined();
    await userEvent.click(button);
    expect(screen.getByText('Select one option')).toBeDefined();
  });
  test('After select error message hide', async () => {
    fireEvent.change(screen.getByTestId('professionSelect'), { target: { value: 'programmer' } });
    const button = screen.getByText('Submit');
    await userEvent.click(button);
    expect(screen.queryByText('Select one option')).toBeNull();
  });
  test('validate date form', async () => {
    const inputDate = screen.getByPlaceholderText('Birthday');
    expect(inputDate).toBeDefined();
    const button = screen.getByText('Submit');
    await userEvent.click(button);
    expect(screen.getByText('Date is empty')).toBeDefined();
    fireEvent.change(inputDate, { target: { value: '2023-04-06' } });
    await userEvent.click(button);
  });
});
