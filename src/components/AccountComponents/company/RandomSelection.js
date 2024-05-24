import React, { useState, useEffect } from 'react'


export default function RandomSelection() {
  // Assuming no test results for the current testing period
  const hasTestResults = true;
  const [testResults, setTestResult] = useState([])
  

  useEffect(() => {
    setTestResult([{
        employee : "Ved Prakash",
        ssn : "23",
        testType : "covid",
        reason : "i don't know",
        dotNonDot : "5445",
        selectionDate:"21/02/2024",
        status : "pending"
      }])
  },[]);

  return (
    <div className="container mt-3">
      <p style={{fontSize : '28px'}}>Random Selections</p>
      <table className="table" >
        <thead>
          <tr>
            <th style={{color:'rgb(64 135 239)'}}>Employee</th>
            <th style={{color:'rgb(64 135 239)'}}>SSN</th>
            <th style={{color:'rgb(64 135 239)'}}>Test Type</th>
            <th style={{color:'rgb(64 135 239)'}}>Reason</th>
            <th style={{color:'rgb(64 135 239)'}}>DOT/Non-DOT</th>
            <th style={{color:'rgb(64 135 239)'}}>Selection Date</th>
            <th style={{color:'rgb(64 135 239)'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {hasTestResults ? (
            // Map over test results and display them here
            testResults.map((result, index) => (
              <tr key={index}>
                <td>{result.employee}</td>
                <td>{result.ssn}</td>
                <td>{result.testType}</td>
                <td>{result.reason}</td>
                <td>{result.dotNonDot}</td>
                <td>{result.selectionDate}</td>
                <td>{result.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">You have no test results for the current testing period.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination d-flex justify-content-between">
        <button className="btn btn-secondary" disabled>&lt; previous</button>
        <button className="btn btn-secondary">next &gt;</button>
      </div>
    </div>
  );
}
