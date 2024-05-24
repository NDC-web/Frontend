import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyAndTools() {
    return (
        <div className='ms-2 mb-5'>
            <p style={{ fontSize: '24px', marginBottom: '0px', marginTop: '20px' }}>COMPANY</p>
            <div className="btn-group-vertical" style={{ width: '100%' }}>
                <Link to='/account/randomSelection' style={{ fontSize: '14px', color: '696363' }} className="btn btn-outline-secondary">Random Selections</Link>
                <Link to='/account/outstandingInvoices' style={{ fontSize: '14px', color: '696363' }} className="btn btn-outline-secondary">Outstanding Invoices</Link>
                <Link to='/account/certificateAndDriverList' style={{ fontSize: '14px', color: '696363' }} className="btn btn-outline-secondary">Certificates & Driver List</Link>
                <Link to='/account/onlineDrugTestOrdered' style={{ fontSize: '14px', color: '696363' }} className="btn btn-outline-secondary">Online Drug Tests Ordered</Link>
            </div>

            <p style={{ fontSize: '24px', marginBottom: '0px', marginTop: '20px' }}>TOOLS</p>
            <div className="btn-group-vertical" style={{ width: '100%' }}>

                <Link to='/account/expressLabFAQ' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Express Labs FAQ's</Link>
                <Link to='/account/RandomTestingInstructions' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Random Testing Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Adding Drivers Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Deactivating Drivers Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Drug Testing Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Alcohol Testing Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Account Update Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Supervisor Training Course</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Positive Results Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Return-to-Duty & Follow-Up Testing</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Refusal-to-Test Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Post-Accident Requirements</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Clearinghouse - Registration</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Clearinghouse - Query Instructions</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Clearinghouse - Reporting Violations</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Audit Requirements & Resources</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Paying Invoices for Testing Fees</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Observed Collections</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Drug & Alcohol Policy</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Add Non-DOT Drug Testing Account</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> 2023 MIS Report</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Order Drug Testing Forms</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Correct Drug Test Results</Link>
                <Link to='/' style={{ fontSize: '14px', color: '696363' }} className='btn btn-outline-secondary'> Terms and Conditions</Link>

            </div>
        </div>
    )
}
