import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from '../App';

test('renders Salary and Tax Calculator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Salary and Tax Calculator/i);
  expect(headerElement).toBeInTheDocument();
});