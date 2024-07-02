const PAYE_BANDS = [
  { limit: 490, rate: 0 },
  { limit: 110, rate: 0.05 },
  { limit: 130, rate: 0.1 },
  { limit: 3166.67, rate: 0.175 },
  { limit: 16000, rate: 0.25 },
  { limit: 30520, rate: 0.3 },
  { limit: Infinity, rate: 0.35 },
];

const SSNIT_RATE = 0.055; // SSNIT – 5.5% of basic salary

const calculatePAYE = (chargeableIncome) => {
  let tax = 0;
  let remainingIncome = chargeableIncome;

  for (const band of PAYE_BANDS) {
    if (remainingIncome <= 0) break;
    const taxableAtThisRate = Math.min(remainingIncome, band.limit);
    tax += taxableAtThisRate * band.rate;
    remainingIncome -= taxableAtThisRate;
  }

  return tax;
};

export const CalculateSalary = (netSalary, allowances) => {
  const employeeTier1 = 0;
  const employeeTier2 = 0.055;
  const employeeTier3 = 0.05;
  const employerTier1 = 0.13;
  const employerTier3 = 0.05;

  // Assume basic salary is 70% of gross salary for initial approximation
  let basic_salary = netSalary / (1 - (employeeTier2 + employeeTier3));
  let gross_salary = basic_salary + allowances;

  let ssnit_contribution = basic_salary * SSNIT_RATE;
  let provident_fund = basic_salary * 0.165; // Assuming full allowable provident fund contribution
  let other_deductions = ssnit_contribution + provident_fund;
  let chargeable_income = gross_salary - other_deductions;

  let total_tax = calculatePAYE(chargeable_income);
  let estimated_net_salary = gross_salary - other_deductions - total_tax;

  // Adjust gross salary based on the difference between estimated and desired net salary
  while (Math.abs(estimated_net_salary - netSalary) > 1) {
    gross_salary += netSalary - estimated_net_salary;
    basic_salary = gross_salary - allowances;
    ssnit_contribution = basic_salary * SSNIT_RATE;
    provident_fund = basic_salary * 0.165;
    other_deductions = ssnit_contribution + provident_fund;
    chargeable_income = gross_salary - other_deductions;
    total_tax = calculatePAYE(chargeable_income);
    estimated_net_salary = gross_salary - other_deductions - total_tax;
  }

  return {
    gross_salary,
    basic_salary,
    total_tax,
    employee_pension_contribution:
    ssnit_contribution + basic_salary * employeeTier3,
    employer_pension_contribution:
    gross_salary * (employerTier1 + employerTier3),
  };
};

export default CalculateSalary;
