import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/UI/button/Button';
describe('Button', () => {
    test('Render button and on click handler work', () => {
        let count = 1;
        function test() {
            count += 1;
        }
        render(React.createElement(Button, { text: 'test', onClck: test }));
        const element = screen.getByText('test');
        fireEvent.click(element);
        expect(screen.getByText('test')).toBeDefined();
        expect(count).toBe(2);
    });
});
