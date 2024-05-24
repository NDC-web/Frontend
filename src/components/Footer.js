import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="footer1">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-2 foot2">
                            <p>© 2023 Express Labs</p>
                            <Link to="/privacy" style={{textDecoration:'none'}}>Privacy Policy</Link>
                            <p>Design & Development by Ved Prakash</p>
                        </div>
                        <div className="col-md-8">
                            <nav className="navbar navbar-expand-lg  ">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav text-center nav3">
                                        <li className="nav-item ">
                                        <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/FrequentlyAskedQuestions">Frequently Asked Questions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/testimonials">Testimonials</Link>
                                        </li>
                                        {!localStorage.getItem('token') ?
                                            <li className="nav-item">
                                                <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/logout">logout</Link>
                                            </li>
                                            :
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/signup">Sign Up</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/login">Member Login</Link>
                                                </li>
                                            </>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2 foot4">
                        <p style={{ marginBottom: '0px' }}>986574865655</p>
                        <Link to="mailto:vedprakash182001@gmail.com">vedprakash182001@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
