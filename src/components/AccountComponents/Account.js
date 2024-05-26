import React from 'react'
import AccountNavbar from './AccountNavbar'
import CompanyAndTools from './CompanyAndTools'
import ExpressLabsFAQ from './tools/ExpressLabsFAQ'
import RandomTestingInstruction from './tools/RandomTestingInstruction'
import RandomSelection from './company/RandomSelection'
import OutstandingInvoice from './company/OutstandingInvoice'
import CertificateAndDriverList from './company/CertificateAndDriverList'
import OnlineDrugTestOrdered from './company/OnlineDrugTestOrdered'
import CreateNewOrder from './createNewOrder/CreateNewOrder'
import {
    Route,
    Routes,
} from "react-router-dom";

export default function Account() {
    return (
        <div>
            <AccountNavbar />
            <div className='row mx-4'>
                <div className='col-md-2'>
                    <CompanyAndTools />
                </div>
                <div className='col-md-10'>
                    <Routes>
                        <Route exact path="/randomSelection" element={< RandomSelection />} />
                        <Route exact path="/outstandingInvoices" element={< OutstandingInvoice />} />
                        <Route exact path="/certificateAndDriverList" element={< CertificateAndDriverList />} />
                        <Route exact path="/onlineDrugTestOrdered" element={< OnlineDrugTestOrdered />} />

                        <Route exact path="/expressLabFAQ" element={<ExpressLabsFAQ />} />
                        <Route exact path="/RandomTestingInstructions" element={< RandomTestingInstruction />} />
                        <Route exact path="/orderDotDrugTest/*" element={< CreateNewOrder />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
