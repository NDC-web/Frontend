import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className=" me-auto my-5" style={{ backgroundColor:'', height: '40px', borderRadius: '5px', color: 'white' }}>
                <div className="btn-group" role="group" aria-label="Basic outlined example" >
                    <Link type="button" to="/account/orderDotDrugTest/" className="btn btn-outline-secondary">Order Information</Link>
                    <Link type="button" to="/account/orderDotDrugTest/participantInformation" className="btn btn-outline-secondary">Participant Information</Link>
                    <Link type="button" className="btn btn-outline-secondary">Choose Collection Site</Link>
                    <Link type="button" className="btn btn-outline-secondary">Submit Order</Link>
                    <Link type="button" className="btn btn-outline-secondary">View Donar Pass</Link>
                </div>
            </div>
        </div>
    )
}
