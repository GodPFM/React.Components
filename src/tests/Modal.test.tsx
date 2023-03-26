import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardAdded from '../components/CardAdded/CardAdded';
import Modal from '../components/UI/Modal/Modal';

describe('Modal', () => {
  test('Should render modal component', async () => {
    render(
      <Modal closeModal={() => {}}>
        <CardAdded closeModal={() => {}} />
      </Modal>
    );
    expect(screen.getByText('Card Successfully added')).toBeDefined();
  });
});
