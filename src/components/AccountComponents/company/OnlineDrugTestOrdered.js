import React, {useState,useEffect} from 'react'

export default function OnlineDrugTestOrdered() {
    const hasResults = false;
    const [results, setResults] = useState([])
    useEffect(() => {
        setResults([])
      },[]);
    return (
        <div className="container mt-3">
            <h2>Online Drug Tests Ordered</h2>
            <hr />
            <p>Below is a list of digitally sent quest orders:</p>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ color: 'red' }}>Authorization#</th>
                        <th>Company</th>
                        <th>Employee</th>
                        <th>DL Number</th>
                        <th>Collection Site</th>
                        <th>Test Reason</th>
                        <th>Status</th>
                        <th>Submitted</th>
                    </tr>
                </thead>
                <tbody>
                    {hasResults ? (
                        // Map over test results and display them here
                        results.map((result, index) => (
                            <tr key={index}>
                                <td>{result.authorization}</td>
                                <td>{result.company}</td>
                                <td>{result.employee}</td>
                                <td>{result.dlNumber}</td>
                                <td>{result.collectionSite}</td>
                                <td>{result.testReason}</td>
                                <td>{result.status}</td>
                                <td>{result.submitted}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No Results</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
