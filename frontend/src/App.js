import React, { useState } from 'react';
import { DataInput, DisplayResults } from './components';
import { CalculateSalary } from './screens'; 

function App() {
  const [results, setResults] = useState(null);

  // Handler tp calculate the salary
  const handleCalculate = (netSalary, allowances) => {
    const salaryResults = CalculateSalary(netSalary, allowances);
    setResults(salaryResults);
  }

  return (
    <div className="App">
      <h1>Landing Page</h1>
      <DataInput calculate={handleCalculate} />
    </div>
  );
}

export default App;
