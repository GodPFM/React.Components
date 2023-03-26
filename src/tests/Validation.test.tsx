import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import AddCardForm from '../pages/AddCardForm';
import ValidationInputs from '../utils/Validation';

describe('Validation tests', () => {
  test('Validate text input', async () => {
    const result = ValidationInputs.validateInputText(undefined);
    expect(result).toBe('Value is empty');
    const result2 = ValidationInputs.validateInputText('ew');
    expect(result2).toBe('Length < 3');
    const result3 = ValidationInputs.validateInputText('test');
    expect(result3).toBe('First letter must be uppercase');
    const result4 = ValidationInputs.validateInputText('Andrew');
    expect(result4).toBe(false);
  });

  test('Validate date input', () => {
    const result = ValidationInputs.validateInputDate(undefined);
    expect(result).toBe('Field is empty');
    const result2 = ValidationInputs.validateInputDate('2023-05-27');
    expect(result2).toBe('The date not has passed');
    const result3 = ValidationInputs.validateInputDate('2021-05-27');
    expect(result3).toBe(false);
  });
  test('Validate select', () => {
    const result = ValidationInputs.validateSelect(undefined);
    expect(result).toBe('Choose category');
    const result1 = ValidationInputs.validateSelect('test');
    expect(result1).toBe(false);
  });
  test('Validate checkbox', () => {
    const result = ValidationInputs.validateCheckbox(undefined);
    expect(result).toBe('Accept the agreement');
    const result1 = ValidationInputs.validateCheckbox(true);
    expect(result1).toBe(false);
  });
  test('Validate radio', () => {
    const result = ValidationInputs.validateRadioInput(false, false, false);
    expect(result).toBe('Choose your sex');
    const result1 = ValidationInputs.validateRadioInput(true, false, false);
    expect(result1).toBe(false);
  });
});
