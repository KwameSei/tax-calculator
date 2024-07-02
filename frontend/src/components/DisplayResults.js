import React from 'react';

import classes from './salary.module.scss';

const DisplayResults = ({ results }) => {
  if (!results) return null;

  return (
    <div className={classes.results_main}>
      <div className={classes.results_container}>
        <p className={classes.gross}>Gross Salary: <span>GH₵ {results.gross_salary.toFixed(2)}</span></p>
        <p className={classes.basic}>Basic Salary: <span>GH₵ {results.basic_salary.toFixed(2)}</span></p>
        <p className={classes.gross}>Total Tax: <span>GH₵ {results.total_tax.toFixed(2)}</span></p>
        <p className={classes.gross}>Employee Pension Contribution: <span>GH₵ {results.employee_pension_contribution.toFixed(2)}</span></p>
        <p className={classes.gross}>Employer Pension Contribution: <span>GH₵ {results.employer_pension_contribution.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default DisplayResults;