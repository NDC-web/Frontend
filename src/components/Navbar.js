import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import {
    Link
} from "react-router-dom";


function Navbar() {

    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault()
        console.log("i am working")
        navigate('/login')
    }
    const handleAccount = async(e)=>{
        e.preventDefault()
        console.log("i am working")
        navigate('/account')
    }

    const handleLogout = ()=>{
        localStorage.removeItem('token')
    }

    return (
        <div>
            <div className="nav1 ">
                <div className=" navbar-container container">
                    <div className="container nav-bar">
                        <div className="text-center">
                            <Link to="/" style={{ textDecoration: 'none' }}><p className="logo" style={{ color: 'rgb(64 135 239)' }}><b>EXPRESS LABS</b></p></Link>

                            <p className="logo1">DOT DRUG & ALCOHOL CONSORTIUM</p>
                        </div>
                    </div>
                    <div className="member-box " style={{ textAlign: 'right' }}>
                        {localStorage.getItem('token') ?
                            <form onSubmit={handleAccount}>
                                <button type="submit" className="btn btn-success">Account</button>
                            </form>
                            :

                            <form onSubmit={handleLogin}>
                                <button type="submit" className="btn btn-success">Member Login</button>
                            </form>
                        }
                        <p style={{ marginBottom: '0px' }}>986574865655</p>
                        <Link to="mailto:vedprakash182001@gmail.com">vedprakash182001@gmail.com</Link>

                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav text-center nav3">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/frequentlyAskedQuestions">Frequently Asked Questions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} to="/testimonials">Testimonials</Link>
                        </li>
                        {localStorage.getItem('token') ?
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'rgb(64 135 239)' }} onClick={handleLogout} >logout</Link>
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
    )
}

export default Navbar
