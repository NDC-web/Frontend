import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import OrderInformation from './OrderInformation'
import ParticipantInformation from './ParticipantInformation'
import CollectionSite from './CollectionSite'
import SubmitOrder from './SubmitOrder'
import ViewDonorPass from './ViewDonorPass'

export default function CreateNewOrder() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<OrderInformation />} />
                <Route exact path="/participantInformation" element={< ParticipantInformation />} />
                <Route exact path="/collectionSite" element={< CollectionSite />} />
                <Route exact path="/submitOrder" element={< SubmitOrder />} />
                <Route exact path="/viewDonorPass" element={< ViewDonorPass />} />
            </Routes>
        </div>
    )
}
