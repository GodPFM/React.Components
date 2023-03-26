import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import NameAndSurnameInputs from '../components/NameInputs/NameAndSurnameInputs';

describe('NameAndSurnameInputs', () => {
  test('Should render NameAndSurname component', async () => {
    const nameRef = React.createRef<HTMLInputElement>();
    const surnameRef = React.createRef<HTMLInputElement>();
    render(
      <NameAndSurnameInputs
        nameRef={nameRef}
        surnameRef={surnameRef}
        nameError={'name error'}
        surnameError={'surname error'}
      />
    );
    expect(screen.getByText('name error')).toBeDefined();
    expect(screen.getByText('surname error')).toBeDefined();
  });
});
