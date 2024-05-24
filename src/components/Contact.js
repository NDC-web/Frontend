import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container">
                <div className="img1">
                <img src="./Image/1.jpg" alt="Tree" />
                </div>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <p style = {{fontSize:'27px'}}>Contact Express Labs DOT Consortium</p>
                        <hr/>
                    </div>
                    <div className="col-md-4">
                        <div className="about1 text-center py-3">
                            <p style={{ fontWeight: 900, fontSize: '25px' }}>24/7 Customer Service</p>
                            <hr />
                            <p>Call Toll Free</p>
                            <p style={{ fontWeight: 500, fontSize: '25px' }}>800-341-1185</p>
                        </div>
                        <div className="about2 text-center py-3 mt-4">
                            <p style={{ fontWeight: 900, fontSize: '25px' }}>Sign Up Today</p>
                            <hr />
                            <p>Only</p>
                            <p style={{ fontWeight: 500, fontSize: '25px' }}>$99 for 1 Year</p>

                            {localStorage.getItem('token') ?
                                <form action="/signup2" method="get">
                                    <button type="submit" className="btn btn-success">Join the DOT Consortium</button>
                                </form>
                                :
                                <form action="/signup1" method="get">
                                    <button type="submit" className="btn btn-success">Join the DOT Consortium</button>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <hr/>
            </div>
        </div>
    )
}
