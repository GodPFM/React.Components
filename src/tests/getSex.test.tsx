import React from 'react';
import { describe, expect, test } from 'vitest';
import getSex from '../utils/getSex';

describe('Get sex', () => {
  test('Should return right sex', async () => {
    let result = getSex(false, true);
    expect(result).toBe('male');
    result = getSex(true, false);
    expect(result).toBe('woman');
    result = getSex(false, false);
    expect(result).toBe('other');
  });
});
