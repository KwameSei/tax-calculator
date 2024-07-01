import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

import classes from './salary.module.scss';

const DataInput = ({ calculate }) => {
  const [netSalary, setNetSalary] = useState('');
  const [allowances, setAllowances] = useState('');

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(parseFloat(netSalary), parseFloat(allowances));
  }

  // Listening for change in net salary input field
  const salaryHandler = (e) => {
    setNetSalary(e.target.value);
  }

  // Listening for change in allowances input field
  const allowancesHandler = (e) => {
    setAllowances(e.target.value);
  }

  return (
    <div className={classes.input_main}>
      <form onSubmit={handleSubmit} className={classes.input_content}>
        <div className={classes.fields}>
          <TextField
            type='number'
            value={netSalary}
            onChange={salaryHandler}
            required
            />
          <TextField
            type='number'
            value={allowances}
            onChange={allowancesHandler}
          />
        </div>
        <div className={classes.button}>
          <Button type='submit'>Calculate</Button>
        </div>
      </form>
    </div>
  )
}

export default DataInput;