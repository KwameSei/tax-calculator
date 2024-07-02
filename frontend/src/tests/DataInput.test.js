import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { DataInput } from '../components';

test('renders DataInput and updates values', () => {
  const setBasicSalary = jest.fn();
  const setAllowances = jest.fn();
  render(
    <DataInput basic_salary={0} setBasicSalary={setBasicSalary} allowances={0} setAllowances={setAllowances} />
  );

  const basicSalaryInput = screen.getByLabelText(/Input Net Salary:/i);
  fireEvent.change(basicSalaryInput, { target: { value: '2000' } });
  expect(setBasicSalary).toHaveBeenCalledWith(2000);

  const allowancesInput = screen.getByLabelText(/Input Allowance\(s\):/i);
  fireEvent.change(allowancesInput, { target: { value: '500' } });
  expect(setAllowances).toHaveBeenCalledWith(500);
});