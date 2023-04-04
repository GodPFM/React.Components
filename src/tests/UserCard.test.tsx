import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserCard from '../components/UI/UserCard/UserCard';

describe('UserCard', () => {
  test('Should render modal component', async () => {
    const obj = {
      name: 'Test test',
      date: '2023-01-02',
      profession: 'programmer',
      sex: 'male',
      image: 'image',
      agreeGetNotification: true,
    };
    render(<UserCard card={obj} />);
    expect(screen.getByText('Test test')).toBeDefined();
  });
});
