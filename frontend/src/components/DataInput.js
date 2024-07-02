import React from "react";
import { TextField } from "@mui/material";

import classes from "./salary.module.scss";

const DataInput = ({
  basic_salary,
  setBasicSalary,
  allowances,
  setAllowances,
}) => {
  // const [netSalary, setNetSalary] = useState('');
  // const [allowances, setAllowances] = useState('');

  // Handler to submit the form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   calculate(parseFloat(netSalary), parseFloat(allowances));
  // }

  // Listening for change in net salary input field
  const salaryHandler = (e) => {
    setBasicSalary(parseFloat(e.target.value));
  };

  // Listening for change in allowances input field
  const allowancesHandler = (e) => {
    setAllowances(parseFloat(e.target.value));
  };

  return (
    <div className={classes.input_main}>
      <form className={classes.input_content}>
        <div className={classes.fields}>
          <div className={classes.text_container}>
            <label>Input Net Salary:</label>
            <TextField
              id="basic_salary"
              type="number"
              value={basic_salary}
              onChange={salaryHandler}
              required
              className={`${classes.text_input} ${classes.basic_salary}`}
            />
          </div>
          <div className={classes.text_container}>
            <label>Input Allowance(s):</label>
            <TextField
              type="number"
              value={allowances}
              onChange={allowancesHandler}
              className={classes.text_input}
            />
          </div>
        </div>
        {/* <div className={classes.button}>
          <Button type='submit'>Calculate</Button>
        </div> */}
      </form>
    </div>
  );
};

export default DataInput;
