import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { data } from './data';

beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    })
});
test('should render when pass array video', () => {
    render(<App />);
    const inputElement = screen.getByText('YouTube Search');
    expect(inputElement).toBeInTheDocument();
});