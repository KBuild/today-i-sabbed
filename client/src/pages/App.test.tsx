import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Today I Sabbed/i);
  expect(linkElement).toBeInTheDocument();
});
