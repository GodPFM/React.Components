import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Image from '../components/UI/Image/Image';

describe('Image', () => {
  test('Should show loader', async () => {
    render(
      <Image src="https://images.asos-media.com/products/sinie-dzhinsy-skinni-s-zanizhennoj-taliej-asos-design-petite-whitby/10038139-1-veneziablue?wid=30" />
    );
    expect(screen.getByTestId('image')).toBeDefined();
    expect(screen.getByTestId('loader')).toBeDefined();
  });
});
