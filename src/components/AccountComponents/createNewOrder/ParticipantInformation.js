// src/components/ParticipantInformation.js

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import newOrderContext from '../../../context/newOrder/newOrderContext';




export default function ParticipantInformation() {
  const context = useContext(newOrderContext);
  const { participantInformation, setParticipantInformation, HandleNavbarStaus, HandlenavbarCompleted } = context
  const [participantAddress, setParticipantAddress] = useState(true);

  const onChange = (e) => {
    setParticipantInformation({ ...participantInformation, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    console.log(participantInformation);
    HandleNavbarStaus(3);
    HandlenavbarCompleted(2);
  }

  return (
    <div className='container mt-4'>
      <h2>Participant Information</h2>
      <p>Use the form below to enter participant information. All required fields are in <strong>bold</strong>.</p>
      <div className='row'>
        <div className='col-md-9' style={{ border: '1px solid black', borderRadius: '5px' }}>
          <div className="d-flex justify-content-between">
            <div className='mb-3 mx-1'>
              <label htmlFor='firstName' className='form-label'>First Name</label>
              <input type='text' className='form-control' id='FirstName' name='FirstName' value={participantInformation.FirstName} onChange={onChange} />
            </div>
            <div className='mb-3 mx-1'>
              <label htmlFor='middleName' className='form-label' >Middle Name</label>
              <input type='text' className='form-control' id='MiddleName' name='MiddleName' value={participantInformation.MiddleName} onChange={onChange} />
            </div>
            <div className='mb-3 mx-1'>
              <label htmlFor='lastName' className='form-label'>Last Name</label>
              <input type='text' className='form-control' id='LastName' name='LastName' value={participantInformation.LastName} onChange={onChange} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className='mb-3'>
              <label htmlFor='ssn' className='form-label'>SSN/EID</label>
              <input type='text' className='form-control' id='SSN' name='SSN' value={participantInformation.SSN} onChange={onChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='dob' className='form-label'>DOB</label>
              <input type='date' className='form-control' id='DOB' name='DOB' value={participantInformation.DOB} onChange={onChange} />
            </div>
            <div>

            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className='mb-3'>
              <label htmlFor='phone1' className='form-label'>Phone 1</label>
              <input type='text' className='form-control' id='Phone1' name='Phone1' value={participantInformation.Phone1} onChange={onChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='phone2' className='form-label'>Phone 2</label>
              <input type='text' className='form-control' id='Phone2' name='Phone2' value={participantInformation.Phone2} onChange={onChange} />
            </div>
            <div></div>
          </div>

          <div className="d-flex justify-content-between">
            <div className='mb-3'>
              <label htmlFor='locationCode' className='form-label'>Location Code</label>
              <input type='text' className='form-control' id='LocationCode' name='LocationCode' value={participantInformation.LocationCode} onChange={onChange} />
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
            <input type='checkbox' className='form-check-input' id='participantAddress' checked={participantAddress} onChange={() => setParticipantAddress(!participantAddress)} />
            <label className='form-check-label ms-2' htmlFor='participantAddress'>Participant Address</label>
          </div>
          {participantAddress && (
            <>
              <div className="d-flex justify-content-between">
                <div className='mb-3'>
                  <label htmlFor='address' style={{ width: "50%" }} className='form-label'>Address</label>
                  <input type='text' className='form-control' id='Address1' name='Address1' value={participantInformation.Address1} onChange={onChange} />
                </div>
                <div className='mb-3'>
                  <label htmlFor='address2' className='form-label'>Address 2</label>
                  <input type='text' className='form-control' id='Address2' name='Address2' value={participantInformation.Address2} onChange={onChange} />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className='mb-3'>
                  <label htmlFor='city' className='form-label'>City</label>
                  <input type='text' className='form-control' id='City' name='City' value={participantInformation.City} onChange={onChange} />
                </div>
                <div className='mb-3'>
                  <label htmlFor='state' className='form-label'>State</label>
                  <select id='state' className='form-select'>
                    <option value=''>Select state</option>
                    {/* Add state options here */}
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='zip' className='form-label'>Zip</label>
                  <input type='text' className='form-control' id='Zip' name='Zip' value={participantInformation.Zip} onChange={onChange} />
                </div>
              </div>
            </>
          )}
        </div>
        <div className='col-md-3'>
          <h3>Order Handling Options</h3>
          <div className='mb-3'>
            <label className='form-label'>Scheduling Method</label>
            <div className='form-check'>
              <input className='form-check-input' type='radio' name='schedulingMethod' id='completeOrder' value='complete' defaultChecked onChange={onChange} />
              <label className='form-check-label' htmlFor='completeOrder'>Complete order for participant</label>
            </div>
            <div className='form-check'>
              <input className='form-check-input' type='radio' name='schedulingMethod' id='sendLink' value='sendLink' />
              <label className='form-check-label' htmlFor='sendLink'>Send link to participant to schedule order</label>
            </div>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Delivery Method</label>
            <div className='form-check'>
              <input type='checkbox' className='form-check-input' id='sendDonorPass' />
              <label className='form-check-label' htmlFor='sendDonorPass'>Send Donor Pass to participant via email</label>
            </div>
            <div className='mt-2'>
              <input type='email' className='form-control' id='emailAddress' placeholder='Email Address' disabled />
            </div>
            <div className='mt-2'>
              <input type='text' className='form-control' id='cc' placeholder='CC' disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <Link type="button" className="btn btn-primary mx-2">Start Over</Link>
          <Link type="button" className="btn btn-primary mx-2">Close</Link>
        </div>
        <div>

          <Link type="button" to="/account/orderDotDrugTest/collectionSite" className="btn btn-warning" onClick={handleClick} >Continue</Link>
        </div>
      </div>

    </div>
  );
}
