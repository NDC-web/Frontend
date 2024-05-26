import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountNavbar() {


    return (
        <div className='mx-4 mt-4'>
            <div style={{marginLeft:'50px'}}>
                <div className="d-flex flex-row-reverse bd-highlight" >
                    <div>
                        <strong style={{ marginBottom: '0px', fontSize: '24px', fontWeight: 700, color: 'rgb(64 135 239)' }}>Nationwide Drug Center</strong>
                        <p style={{ marginBottom: '0px', fontSize: '18px', fontWeight: 500 }}>DOT Authority# Nationwide Drug Center</p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="my-2" style={{ height: '40px', borderRadius: '5px', color: 'white' }}>
                    <div className="btn-group" role="group" >
                        <Link type="button" to="/account/orderDotDrugTest" className="btn btn-primary">Order DOT Drug Test</Link>
                        <Link type="button" className="btn btn-primary">Order Alcohol Tests</Link>
                        <Link type="button" className="btn btn-primary">Account Details</Link>
                        <Link type="button" className="btn btn-primary">Account Address</Link>
                        <Link type="button" className="btn btn-primary">Manage Drivers</Link>
                        <Link type="button" className="btn btn-primary">All Drug Test Result</Link>
                        <Link type="button" className="btn btn-primary">Invoices</Link>
                        <Link type="button" className="btn btn-primary">Payment Options</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
