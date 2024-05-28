// src/components/ParticipantInformation.js

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import newOrderContext from '../../../context/newOrder/newOrderContext';
import { useNavigate } from 'react-router-dom';

export default function ParticipantInformation() {
  const navigate = useNavigate()
  const context = useContext(newOrderContext);
  const { participantInformation, setParticipantInformation, reload, HandleNavbarStaus, HandlenavbarCompleted ,newOrderLocation,newOrderPackage,newOrderReason} = context;
  const [participantAddress, setParticipantAddress] = useState(true);
  const [sendDonorPass, setSendDonorPass] = useState(false);


  const onChange = (e) => {
    setParticipantInformation({ ...participantInformation, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(participantInformation);
    HandleNavbarStaus(3);
    HandlenavbarCompleted(2);
    navigate("/account/orderDotDrugTest/collectionSite")
  };

  const handleSendDonorPassChange = (e) => {
    setSendDonorPass(e.target.checked);
  };

  useEffect(() => {
    if (reload === false) {
      navigate("/account/orderDotDrugTest/")
    }
    // eslint-disable-next-line
  }, []);

  const handleClose = () => {
    newOrderLocation('');
    newOrderPackage('');
    newOrderReason('');
  }

  return (
    <div className='container mt-4'>
      <h2>Participant Information</h2>
      <p>Use the form below to enter participant information. All required fields are marked <span style={{ color: 'red' }}> *</span>.</p>
      <form onSubmit={handleSubmit}>
        <div className='row'>

          <div className='col-md-9' style={{ border: '1px solid black', borderRadius: '5px' }}>
            <div className="d-flex justify-content-between">
              <div className='mb-3 mx-1'>
                <label htmlFor='MiddleName' className='form-label'>
                  First Name<span style={{ color: 'red' }}> *</span>
                </label>
                <input type='text' className='form-control' id='FirstName' name='FirstName' value={participantInformation.FirstName} onChange={onChange} required />
              </div>
              <div className='mb-3 mx-1'>
                <label htmlFor='middleName' className='form-label' >Middle Name</label>
                <input type='text' className='form-control' id='MiddleName' name='MiddleName' value={participantInformation.MiddleName} onChange={onChange} />
              </div>
              <div className='mb-3 mx-1'>
                <label htmlFor='lastName' className='form-label'>Last Name<span style={{ color: 'red' }}> *</span></label>
                <input type='text' className='form-control' id='LastName' name='LastName' value={participantInformation.LastName} onChange={onChange} required />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className='mb-3'>
                <label htmlFor='ssn' className='form-label'>SSN/EID<span style={{ color: 'red' }}> *</span></label>
                <input type='text' className='form-control' id='SSN' name='SSN' value={participantInformation.SSN} onChange={onChange} required />
              </div>
              <div className='mb-3'>
                <label htmlFor='dob' className='form-label'>DOB<span style={{ color: 'red' }}> *</span></label>
                <input type='date' className='form-control' id='DOB' name='DOB' value={participantInformation.DOB} onChange={onChange} required />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className='mb-3'>
                <label htmlFor='phone1' className='form-label'>Phone 1<span style={{ color: 'red' }}> *</span></label>
                <input type='text' className='form-control' id='Phone1' name='Phone1' value={participantInformation.Phone1} onChange={onChange} required />
              </div>
              <div className='mb-3'>
                <label htmlFor='phone2' className='form-label'>Phone 2</label>
                <input type='text' className='form-control' id='Phone2' name='Phone2' value={participantInformation.Phone2} onChange={onChange} />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className='mb-3'>
                <label htmlFor='locationCode' className='form-label'>Location Code<span style={{ color: 'red' }}> *</span></label>
                <input type='text' className='form-control' id='LocationCode' name='LocationCode' value={participantInformation.LocationCode} onChange={onChange} required />
              </div>
              <div className='mb-3'>
                <label htmlFor='orderExpires' className='form-label'>Order Expires</label>
                <p>Time and Date</p>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Observed Collection?</label>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='observedCollection' id='observedCollectionNo' value='no' defaultChecked />
                  <label className='form-check-label' htmlFor='observedCollectionNo'>No</label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='observedCollection' id='observedCollectionYes' value='yes' />
                  <label className='form-check-label' htmlFor='observedCollectionYes'>Yes</label>
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <input type='checkbox' className='form-check-input' id='participantAddress' checked={participantAddress} onChange={() => setParticipantAddress(!participantAddress)} required />
              <label className='form-check-label ms-2' htmlFor='participantAddress'>Participant Address<span style={{ color: 'red' }}> *</span></label>
            </div>
            {participantAddress && (
              <>
                <div className="d-flex justify-content-between">
                  <div className='mb-3'>
                    <label htmlFor='address' style={{ width: "50%" }} className='form-label'>Address<span style={{ color: 'red' }}> *</span></label>
                    <input type='text' className='form-control' id='Address1' name='Address1' value={participantInformation.Address1} onChange={onChange} required />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='address2' className='form-label'>Address 2</label>
                    <input type='text' className='form-control' id='Address2' name='Address2' value={participantInformation.Address2} onChange={onChange} />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className='mb-3'>
                    <label htmlFor='city' className='form-label'>City<span style={{ color: 'red' }}> *</span></label>
                    <input type='text' className='form-control' id='City' name='City' value={participantInformation.City} onChange={onChange} required />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='state' className='form-label'>State<span style={{ color: 'red' }}> *</span></label>
                    <select id='state' className='form-select' name='State' value={participantInformation.State} onChange={onChange} required>
                      <option value=''>Select state</option>
                      <option value='AL'>Alabama</option>
                      <option value='AK'>Alaska</option>
                      <option value='AZ'>Arizona</option>
                      <option value='AR'>Arkansas</option>
                      <option value='CA'>California</option>

                    </select>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='zip' className='form-label'>Zip Code<span style={{ color: 'red' }}> *</span></label>
                    <input type='text' className='form-control' id='Zip' name='Zip' value={participantInformation.Zip} onChange={onChange} required />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className='col-md-3' style={{ border: '1px solid black', borderRadius: '5px' }}>
            <div className='mb-3'>
              <h4>Order Handling Options</h4>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='SchedulingMethod' id='CompleteOrder' value='complete' checked />
                <label className='form-check-label' htmlFor='CompleteOrder'>Complete order for participant</label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='SchedulingMethod' id='SendLink' value='send_link' />
                <label className='form-check-label' htmlFor='SendLink'>Send link to participant to schedule order</label>
              </div>
            </div>
            <div className='mb-3'>
              <h4>Delivery Method</h4>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' id='SendDonorPass' checked={sendDonorPass} onChange={handleSendDonorPassChange} />
                <label className='form-check-label' htmlFor='SendDonorPass'>Send Donor Pass to participant via email</label>
              </div>
              {sendDonorPass && (
                <>
                  <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>Email Address</label>
                    <input type='email' className='form-control' id='Email' name='Email' value={participantInformation.Email} onChange={onChange} />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='CC' className='form-label'>CC</label>
                    <input type='email' className='form-control' id='CC' name='CC' value={participantInformation.CC} onChange={onChange} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div className="p-2 flex-grow-1">
            <Link type="button" className="btn btn-primary mx-2">Start Over</Link>
            <Link type="button" className="btn btn-primary mx-2" to="/account" onClick={handleClose}>Close</Link>
          </div>
          <div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>


    </div>
  );
}
