import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page404 from '../pages/Page404';
describe('Page 404', () => {
    test('Should render page 404', async () => {
        render(React.createElement(Page404, null));
        expect(screen.getByText(/Page 404/i)).toBeDefined();
    });
});
