import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Membership() {
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("i am working")
        navigate('/addDriver')
    }

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
                    <p className="curr1a" >2</p>
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
                    <p className="curr1" >4</p>
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


            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <p style={{ fontSize: '30px', fontWeight: 500 }}>Choose Membership</p>
                    <p>Choose your desired length of membership to the DOT Consortium.</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="plan" value="1"  />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <b>1 Year Membership - $ 99.00</b>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="plan" value="2"  />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            <b>3 Year Membership - $ 199.00</b>
                        </label>
                    </div>
                    <hr className="mt-5" />
                    <p className="mt-5" style={{ fontSize: '30px', fontWeight: 500 }}>Add Supervisor Training - $100.00 each</p>
                    <input type="text" id="" placeholder="Quantity" name="quantity"  />
                    <p className="mt-3">All supervisors are required to have supervisor training.</p>
                    <hr className="mt-4" />
                    <p className="mt-5" style={{ fontSize: '30px', fontWeight: 500 }}>Terms of Use</p>
                    <p>In order to participate in the Express Labs DOT Consortium, you must agree to our Terms of Use.</p>
                    {/* <a href="Read the terms of Use" className=""></a> */}
                    <input className="me-2" type="checkbox" name="" id=""  />I Agree to the Terms of Use
                    <div style={{ alignContent: 'flex-end' }}>
                        <button type="submit" className="btn btn-success mt-3">Add Drivers {`>>`}</button>
                    </div>
                </form>
            </div>
            <div className="container my-5">
                <hr />
            </div>
        </div>

    )
}
