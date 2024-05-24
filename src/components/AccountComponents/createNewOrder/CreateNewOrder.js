import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import OrderInformation from './OrderInformation'
import ParticipantInformation from './ParticipantInformation'

export default function CreateNewOrder() {
    return (
        <div>
            <Navbar/>
            <Routes>
            <Route exact path="/" element={<OrderInformation  />} />
            <Route exact path="/participantInformation" element={< ParticipantInformation  />} />
            </Routes>
        </div>
    )
}
