import React from 'react'

export default function Payment() {
  return (
    <div>
          <div className="container mt-3 container1">
        <div className="box1">
            <p className="curr1" >1</p>
            <p style={{ fontSize: '12px' }}>CONTACT INFO</p>
        </div>
        <div className="linebox">
            <div className="line"></div>
        </div>
        <div className="box1">
            <p className="curr1" >2</p>
            <p style={{ fontSize: '12px' }}>MEMBERSHIP</p>
        </div>
        <div className="linebox">
            <div className="line"></div>
        </div>
        <div className="box1">
            <p className="curr1" >3</p>
            <p style={{ fontSize: '12px' }}>ADD DRIVERS</p>
        </div>
        <div className="linebox">
            <div className="line"></div>
        </div>
        <div className="box1">
            <p className="curr1a" >4</p>
            <p style={{ fontSize: '12px' }}>PAYMENT</p>
        </div>
        <div className="linebox">
            <div className="line"></div>
        </div>
        <div className="box1">
            <p className="curr1" >5</p>
            <p style={{ fontSize: '12px' }}>REVIEW</p>
        </div>
    </div>

    <div className="container">
        <p style={{ fontSize: '30px', fontWeight: 500 }}>Payment Options</p>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                <b>Add New Number</b>
            </label>
        </div>
        <hr className="mt-5"/>
        <p style={{ fontSize: '25px', fontWeight: 500 }}>Card Information</p>
       <form action="/signup4" method="post">
             <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label  className="form-label">First Name</label>
                        <input type="text" className="form-control" name="fname" required/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Credit Card Number</label>
                        <input type="number" className="form-control" name="ccnumber" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label  className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="lname"required/>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label  className="form-label">Month</label>
                                <input type="number" className="form-control" name="month"  required/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label  className="form-label">Year</label>
                                <input type="number" className="form-control" name="year" required/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label  className="form-label">Ccv</label>
                                <input type="number" className="form-control" name="ccv" required/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <p style={{ fontSize: '30px', fontWeight: 500 }} className="mt-5">Billing Address</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label  className="form-label">Address 1</label>
                        <input type="text" className="form-control" name="address1" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label  className="form-label">Address 2</label>
                        <input type="text" className="form-control" name="address2"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label  className="form-label">City</label>
                        <input type="text" className="form-control" name="city"  required/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label  className="form-label">State</label>
                        <input type="text" className="form-control" name="state"  required/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <label  className="form-label">Zip Code</label>
                        <input type="text" className="form-control" name="zipcode"  required/>
                    </div>
                </div>
            </div>
    <button type="Submit" className="btn btn-success">Review Body {`>>`} </button>
       </form>
    </div>
    <div className="container my-5">
      <hr/>
    </div>
    </div>
  )
}
