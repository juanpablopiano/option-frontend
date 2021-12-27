import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

let mockHandler: any;
beforeEach(() => {
	mockHandler = jest.fn();
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
test('should render when placeholder is "Escriba el video que desea buscar"', () => {
	const loading = false;
	const onClickFn = () => console.log('hola');
	render(<SearchBar onClick={onClickFn} loading={loading} />);
	const inputElement = screen.getByPlaceholderText(
		/Escriba el video que desea buscar/i
	);
	expect(inputElement).toBeInTheDocument();

});
test('should render when clicking in button inside search bar', () => {
	const loading = false;
	render(<SearchBar onClick={mockHandler} loading={loading} />);
	const button = screen.getByRole('button');
	fireEvent.click(button);
	expect(mockHandler.mock.calls).toHaveLength(1);
});