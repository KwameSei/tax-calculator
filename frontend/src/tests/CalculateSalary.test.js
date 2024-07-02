import { CalculateSalary } from '../screens';

test('calculates salary correctly', () => {
  const results = CalculateSalary(2000, 500);

  expect(results.gross_salary).toBeCloseTo(2796.19, 2);
  expect(results.basic_salary).toBeCloseTo(2296.19, 2);
  expect(results.total_tax).toBeCloseTo(291.68, 2);
  expect(results.employee_pension_contribution).toBeCloseTo(241.10, 2);
  expect(results.employer_pension_contribution).toBeCloseTo(503.31, 2);
});
