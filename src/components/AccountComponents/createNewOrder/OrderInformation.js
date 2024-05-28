import React, { useContext } from 'react';
import data from './data';
import newOrderContext from "../../../context/newOrder/newOrderContext";
import { Link } from 'react-router-dom';


const DisabledLink = ({ children, className }) => (
    <span className={`${className} disabled`} aria-disabled="false">
        {children}
    </span>
);

export default function OrderInformation() {
    const context = useContext(newOrderContext);
    const { selectedLocation, selectedPackage, selectedReason, newOrderLocation, newOrderPackage, newOrderReason, setReload, HandleNavbarStaus, HandlenavbarCompleted } = context;

    const handleLocationChange = (event) => {
        newOrderLocation(event.target.value);
        HandleNavbarStaus(1);
        HandlenavbarCompleted(0);
    };

    const handlePackageChange = (event) => {
        newOrderPackage(event.target.value);
        HandleNavbarStaus(1);
        HandlenavbarCompleted(0);
    };

    const handleReasonChange = (event) => {
        newOrderReason(event.target.value);
        HandleNavbarStaus(1);
        HandlenavbarCompleted(0);
    };

    const handleClick = () => {
        HandleNavbarStaus(2);
        HandlenavbarCompleted(1);
        setReload(true)
    };

    const handleClose = ()=>{
        newOrderLocation('');
        newOrderPackage('');
        newOrderReason('');
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-4 mt-1'>
                    <div className="container">
                        <h5>Order Information</h5>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Company Location</label>
                            <select
                                id="location"
                                className="form-select"
                                value={selectedLocation}
                                onChange={handleLocationChange}
                            >
                                <option value="" disabled>Select a location</option>
                                {data.locations.map((location) => (
                                    <option key={location} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="package" className="form-label">Package</label>
                            <select
                                id="package"
                                className="form-select"
                                value={selectedPackage}
                                onChange={handlePackageChange}
                                disabled={!selectedLocation}
                            >
                                <option value="" disabled>Select a package</option>
                                {selectedLocation &&
                                    data.packages[selectedLocation] &&
                                    data.packages[selectedLocation].map((pkg) => (
                                        <option key={pkg} value={pkg}>
                                            {pkg}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="reason" className="form-label">Order Reason</label>
                            <select
                                id="reason"
                                className="form-select"
                                value={selectedReason}
                                onChange={handleReasonChange}
                                disabled={!selectedPackage}
                            >
                                <option value="" disabled>Select a reason</option>
                                {selectedPackage &&
                                    data.reasons[selectedLocation] &&
                                    data.reasons[selectedLocation][selectedPackage] &&
                                    data.reasons[selectedLocation][selectedPackage].map((reason) => (
                                        <option key={reason} value={reason}>
                                            {reason}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 mt-1'>
                    <div className="container" style={{ height: '300px', border: '1px solid black', borderRadius: '5px' }}>
                        <h5>Testing Package Details</h5>
                        {selectedLocation !== '' &&
                            <div className='mt-3'>
                                <p style={{ margin: '0px' }}><b>Company Location</b></p>
                                <p style={{ margin: '0px' }}>
                                    {Array.isArray(selectedLocation)
                                        ? selectedLocation.map((loc, index) => <span key={index}>{loc}<br /></span>)
                                        : selectedLocation}
                                </p>
                            </div>
                        }
                        {selectedPackage !== '' &&
                            <div className='mt-3'>
                                <p style={{ margin: '0px' }}><b>Package Name</b></p>
                                <p style={{ margin: '0px' }}>
                                    {Array.isArray(selectedPackage)
                                        ? selectedPackage.map((pkg, index) => <span key={index}>{pkg}<br /></span>)
                                        : selectedPackage}
                                </p>
                            </div>
                        }
                        {selectedReason !== '' &&
                            <div className='mt-3'>
                                <p style={{ margin: '0px' }}><b>Default Order Expiration</b></p>
                                <p style={{ margin: '0px' }}>
                                    {Array.isArray(selectedReason)
                                        ? selectedReason.map((reason, index) => <span key={index}>{reason}<br /></span>)
                                        : selectedReason}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="d-flex mt-2">
                <div className="p-2 flex-grow-1">
                    <Link type="button" className="btn btn-primary mx-2" to="/account" onClick={handleClose}>Close</Link>
                </div>
                <div>
                    {selectedReason === '' ?
                        <DisabledLink type="button" to="/account/orderDotDrugTest/participantInformation" onClick={handleClick} className="btn btn-warning">Continue</DisabledLink>
                        :

                        <Link type="button" to="/account/orderDotDrugTest/participantInformation" onClick={handleClick} className="btn btn-warning">Continue</Link>
                    }
                </div>
            </div>
        </div>
    );
}
