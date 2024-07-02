import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { DisplayResults } from '../components';

test('renders DisplayResults component', () => {
  const results = {
    grossSalary: '3000.00',
    basicSalary: '2000.00',
    totalTax: '500.00',
    employeePension: '200.00',
    employerPension: '300.00'
  };
  render(<DisplayResults results={results} />);
  const grossSalaryElement = screen.getByText((content, element) => 
    element.tagName.toLowerCase() === 'p' && /Gross Salary: GH₵ 3000.00/i.test(content)
  );
  expect(grossSalaryElement).toBeInTheDocument();
});