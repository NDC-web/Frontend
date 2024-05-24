// src/components/ParticipantInformation.js

import React, { useState } from 'react';

export default function ParticipantInformation() {
  const [participantAddress, setParticipantAddress] = useState(true);

  return (
    <div className='container mt-4'>
      <h2>Participant Information</h2>
      <p>Use the form below to enter participant information. All required fields are in <strong>bold</strong>.</p>
      <div className='row'>
        <div className='col-md-9'>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>First Name</label>
            <input type='text' className='form-control' id='firstName' />
          </div>
          <div className='mb-3'>
            <label htmlFor='middleName' className='form-label'>Middle Name</label>
            <input type='text' className='form-control' id='middleName' />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>Last Name</label>
            <input type='text' className='form-control' id='lastName' required />
            <div className='form-text text-danger'>Last name required</div>
          </div>
          <div className='mb-3'>
            <label htmlFor='ssn' className='form-label'>SSN/EID</label>
            <input type='text' className='form-control' id='ssn' />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone1' className='form-label'>Phone 1</label>
            <input type='text' className='form-control' id='phone1' />
          </div>
          <div className='mb-3'>
            <label htmlFor='dob' className='form-label'>DOB</label>
            <input type='date' className='form-control' id='dob' />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone2' className='form-label'>Phone 2</label>
            <input type='text' className='form-control' id='phone2' />
          </div>
          <div className='mb-3'>
            <label htmlFor='locationCode' className='form-label'>Location Code</label>
            <input type='text' className='form-control' id='locationCode' />
          </div>
          <div className='mb-3'>
            <label htmlFor='orderExpires' className='form-label'>Order Expires</label>
            <input type='datetime-local' className='form-control' id='orderExpires' />
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
          <div className='mb-3'>
            <input type='checkbox' className='form-check-input' id='participantAddress' checked={participantAddress} onChange={() => setParticipantAddress(!participantAddress)} />
            <label className='form-check-label' htmlFor='participantAddress'>Participant Address</label>
          </div>
          {participantAddress && (
            <>
              <div className='mb-3'>
                <label htmlFor='address' className='form-label'>Address</label>
                <input type='text' className='form-control' id='address' />
              </div>
              <div className='mb-3'>
                <label htmlFor='address2' className='form-label'>Address 2</label>
                <input type='text' className='form-control' id='address2' />
              </div>
              <div className='mb-3'>
                <label htmlFor='city' className='form-label'>City</label>
                <input type='text' className='form-control' id='city' />
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
                <input type='text' className='form-control' id='zip' />
              </div>
            </>
          )}
        </div>
        <div className='col-md-3'>
          <h3>Order Handling Options</h3>
          <div className='mb-3'>
            <label className='form-label'>Scheduling Method</label>
            <div className='form-check'>
              <input className='form-check-input' type='radio' name='schedulingMethod' id='completeOrder' value='complete' defaultChecked />
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
    </div>
  );
}
