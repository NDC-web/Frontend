// SubmitOrderPage.js
import React, { useContext,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../../index.css"
import { Link, useNavigate } from 'react-router-dom';
import newOrderContext from '../../../context/newOrder/newOrderContext';

const SubmitOrder = () => {
    const navigate = useNavigate();
    const context = useContext(newOrderContext)
    const {selectedPackage,reload, selectedReason,participantInformation,HandleNavbarStaus, HandlenavbarCompleted} = context
    const handleClick = ()=>{
        HandleNavbarStaus(5);
        HandlenavbarCompleted(4);
    }
    useEffect(() => {
        if(reload === false){
          navigate("/account/orderDotDrugTest/")
        }
        // eslint-disable-next-line
      },[]);
    return (
        <>
            <div className='container my-5'>
                <h2 className="mb-4">Submit Order</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <h5>Order Information</h5>
                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Order Reason : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>{selectedReason}</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Package : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>{selectedPackage}</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Company Location : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>SEATECH CONSULTING INC DBA Nationwide Drug Centers</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Collection Site : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}> LABCORP - NEW YORK , NY (3RD AVE) **APPT REQ**</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Collection Site Address : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>111 3rd Avenue, New York, NY 10003</p></div>
                        </div>


                        <h5 className='mt-5'>Participant Information</h5>
                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>First Name : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>{participantInformation.FirstName}</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Last Name : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>{participantInformation.LastName}</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Primary ID : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>hjhj</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Phone : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>{participantInformation.Phone1}</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Email : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>vedprakash@gmail.com</p></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'><p style={{ marginBottom: '1px', fontWeight: 500, color: '#818181', fontSize: '16px' }}>Address : </p></div>
                            <div className='col-md-8'><p style={{ marginBottom: '1px', fontSize: '16px' }}>{participantInformation.Address1}</p></div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h5>Custom Message for Participant on Order Confirmation Form</h5>
                        <ReactQuill theme="snow" />
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="p-2 flex-grow-1">
                        <Link type="button" className="btn btn-primary mx-2">Start Over</Link>
                        <Link type="button" className="btn btn-primary mx-2">Close</Link>
                    </div>
                    <div>

                        <Link type="button" to="/account/orderDotDrugTest/viewDonorPass" className="btn btn-warning" onClick={handleClick} disabled>Continue</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SubmitOrder;
