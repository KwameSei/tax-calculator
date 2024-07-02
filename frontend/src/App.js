import React, { useState, useEffect } from "react";
import { DataInput, DisplayResults } from "./components";
import { CalculateSalary } from "./screens";

import "./App.css";

function App() {
  const [gross_salary, setGrossSalry] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [basic_salary, setBasicSalary] = useState(0);
  const [results, setResults] = useState(null);

  // Dynamically display results to user as they input data
  useEffect(() => {
    const salaryResults = CalculateSalary(basic_salary, allowances);
    setResults(salaryResults);
  }, [gross_salary, basic_salary, allowances]);

  return (
    <div className="app">
      <div className="app-content">
        <h1>Salary and Tax Calculator</h1>
        <DataInput
          basic_salary={basic_salary}
          setBasicSalary={setBasicSalary}
          allowances={allowances}
          setAllowances={setAllowances}
        />
        {results && <DisplayResults results={results} />}
      </div>
    </div>
  );

  // Handler tp calculate the salary
  // const handleCalculate = (basic_salary, allowances) => {
  //   const salaryResults = CalculateSalary(basic_salary, allowances);
  //   setResults(salaryResults);
  // }

  // return (
  //   <div className="App">
  //     <h1>Landing Page</h1>
  //     <DataInput calculate={handleCalculate} />
  //     <DisplayResults results={results} />
  //   </div>
  // );
}

export default App;
