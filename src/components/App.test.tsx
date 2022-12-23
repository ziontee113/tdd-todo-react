import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import App from './App';

describe('App', () => {
    it('Renders "Vite + React" Header', () => {
        render(<App />);
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Vite + React');
    });

    it('should increment count', async () => {
        const user = userEvent.setup();
        render(<App />);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('count is 0');

        await user.click(button);
        expect(button).toHaveTextContent('count is 1');
    });
});
