import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DateAndSelectInputs from '../components/DateAndSelectInputs/DateAndSelectInputs';

describe('DateAndSelectInputs', () => {
  test('Should render AddCardForm component', async () => {
    const dateRef = React.createRef<HTMLInputElement>();
    const selectRef = React.createRef<HTMLSelectElement>();
    render(
      <DateAndSelectInputs
        dateError={'Date error'}
        dateRef={dateRef}
        selectError={'Select error'}
        selectRef={selectRef}
      />
    );
    expect(screen.getByText('Date error')).toBeDefined();
    expect(screen.getByRole('combobox')).toBeDefined();
  });
});
