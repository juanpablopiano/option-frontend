import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import CardList from '../components/CardList';
import { data } from './data';

let app: any;
beforeEach(() => {
    app = jest.fn();
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
    render(<CardList videos={data} />);
    const inputElement = screen.getAllByRole('carditem');
    expect(inputElement.length).toEqual(1);
});