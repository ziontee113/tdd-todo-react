import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('Renders Vite + React', () => {
        render(<App />);
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Vite + React');
    });
});
