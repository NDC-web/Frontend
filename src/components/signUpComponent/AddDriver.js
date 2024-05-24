import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddDriver() {

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("i am working")
        navigate('/payment')
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
                    <p className="curr1" >2</p>
                    <p style={{ fontSize: '12px' }}>MEMBERSHIP</p>
                </div>
                <div className="linebox">
                    <div className="line"></div>
                </div>
                <div className="box1">
                    <p className="curr1a" >3</p>
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




            <div className="container mt-4">
                <p style={{ fontSize: '30px', fontWeight: 500 }}>Add Drivers</p>
                <p>Upon Enrolling in the Consortium you can Add All your Active Drivers that have Negative Pre-Employment DOT Drug Test Results and have been in a Random Pool within the Previous 30 Days. DOT Requires a New Pre-Employment Drug Test if a Driver is not in a Random Pool for more than 30 Days.</p>
                <div className="row mt-5">
                    <div className="col-md-3"><p>First Name</p></div>
                    <div className="col-md-3"><p>Last Name</p></div>
                    <div className="col-md-1"><p>SSN</p></div>
                    <div className="col-md-2"><p>CDL State</p></div>
                    <div className="col-md-2"><p>CDL Number</p></div>
                </div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <div id="newdriver">
                            <div className="row mt-2">
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="First Name" name="fname" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Last Name" name="lname" />
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="SSN" name="ssn" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="CDL State" name="cdlstate" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="DL Number" name="dlnumber" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success mb-3" style={{ width: '100%' }} onclick="makeNewDriver(this)" >Click Here to add More Drivers</button>
                    </div>
                    <input type="checkbox" name="" id="" className="mr-3 mx-2" />Click Here to Confirm the Drivers Listed Above have Negative DOT Pre-Employment Drug Test Results - Then Click Finished Adding Drivers below.
                    <p className="me-2">If you are Not Adding Drivers - Click Finished Adding Drivers Below.</p>
                    <button type="submit" className="btn btn-success">Finish Adding Driver {`>>`} </button>
                </form>
            </div>
            <div className="container my-5">
                <hr />
            </div>
        </div>
    )
}
