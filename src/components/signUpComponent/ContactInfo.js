import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactInfo() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        fname : "",
        lname : "",
        title : "",
        phone : 0,
        email : "",
        password : "",
        cpassword :"",
        // company details
        companyName : "",
        dotNumber : 0,
        cphone : 0,
        fax : "",
        address1 : "",
        address2 : "",
        city : "",
        state : "",
        zipCode : 0,
        referedBy :"",
    }) 

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:8000/api/userlogin/signUp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname :  credentials.fname ,
                lname :  credentials.lname ,
                title :  credentials.title ,
                phone : credentials.phone,
                email :  credentials.email ,
                password :  credentials.password ,
                cpassword : credentials.cpassword,
                // company deta credentials.// company des
                companyName :  credentials.companyName ,
                dotNumber : credentials.dotNumber,
                cphone : credentials.cphone,
                fax :  credentials.fax ,
                address1 :  credentials.address1 ,
                address2 :  credentials.address2 ,
                city :  credentials.city ,
                state :  credentials.state ,
                zipCode : credentials.zipCode,
                referedBy : credentials.referedBy,

            })
        });
        const json = await response.json()
        console.log(json);
        if (json.status){
            localStorage.setItem('token', json.token); 
            navigate('/membership')
        }
        else{
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className="container mt-3 container1">
                <div className="box1">
                    <p className="curr1a" >1</p>
                    <p style={{fontSize:'12px'}}>CONTACT INFO</p>
                </div>
                <div className="linebox">
                    <div className="line"></div>
                </div>
                <div className="box1">
                    <p className="curr1" >2</p>
                    <p style={{fontSize:'12px'}}>MEMBERSHIP</p>
                </div>
                <div className="linebox">
                    <div className="line"></div>
                </div>
                <div className="box1">
                    <p className="curr1" >3</p>
                    <p style={{fontSize:'12px'}}>ADD DRIVERS</p>
                </div>
                <div className="linebox">
                    <div className="line"></div>
                </div>
                <div className="box1">
                    <p className="curr1" >4</p>
                    <p style={{fontSize:'12px'}}>PAYMENT</p>
                </div>
                <div className="linebox">
                    <div className="line"></div>
                </div>
                <div className="box1">
                    <p className="curr1" >5</p>
                    <p style={{fontSize:'12px'}}>REVIEW</p>
                </div>
            </div>
            <div className="container">
                <p style={{fontSize:'25px', marginBottom:'0px'}}>Primary Contact Person</p>
                <p>Designated Employee Representative (DER)</p>
                <hr />
                <p style={{fontSize:'12px'}} ><b style={{color:'red'}}>*</b> Denotes required field</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">First Name <b style={{color:'red'}}>*</b></label>
                                <input type="text" className="form-control" name="fname"  id='fname' value={credentials.fname}  onChange={onChange}/>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Title (Optional)</label>
                                        <input type="text" className="form-control" name="title" id='title' value={credentials.title}  onChange={onChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="number" className="form-control" name="phone" id='phone' value={credentials.phone}  onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password <b style={{color:'red'}}>*</b></label>
                                <input type="password" className="form-control" name="password" id='password' value={credentials.password}  onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Last Name <b style={{color:'red'}}>*</b></label >
                                <input type="text" className="form-control" name="lname" id='lname' value={credentials.lname}  onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email <b style={{color:'red'}}>*</b></label>
                                <input type="email" className="form-control" name="email"  value={credentials.email} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password <b style={{color:'red'}}>*</b></label>
                                <input type="password" className="form-control" name="cpassword" value={credentials.cpassword}  onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5" style={{fontSize:'30px'}}>Company Information</p>
                    <hr />
                    <div className="mb-3">
                        <label className="form-label">Company Name <b style={{color:'red'}}>*</b></label>
                        <input type="text" className="form-control" name="companyName"  value={credentials.companyName} onChange={onChange}/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">DOT Authority Number</label>
                                <input type="text" className="form-control" name="dotNumber" value={credentials.dotNumber}  onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Phone <b style={{color:'red'}}>*</b></label>
                                <input type="number" className="form-control" name="cphone" value={credentials.cphone} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address 1 (May not be P.O. Box Addresses)</label>
                                <input type="text" className="form-control" name="address1"  value={credentials.address1} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Fax</label>
                                <input type="number" className="form-control" name="fax" value={credentials.fax}  onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address 2</label>
                                <input type="text" className="form-control" name="address2"  value={credentials.address2} onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">City <b style={{color:'red'}}>*</b></label>
                                <input type="text" className="form-control" name="city"  value={credentials.city} onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Referred By (optional)</label>
                                <input type="text" className="form-control" name="referedBy"  value={credentials.referedBy} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">State <b style={{color:'red'}}>*</b></label>
                                <input type="text" className="form-control" name="state" value={credentials.state}  onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Zip Code <b style={{color:'red'}}>*</b></label>
                                <input type="text" className="form-control" name="zipCode" value={credentials.zipCode}  onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                    <div style={{alignContent:'flex-end'}}>
                        <button type="submit" className="btn btn-success">Choose Membership {`>>`} </button>
                    </div>
                </form>
            </div>


            <div className="container my-5">
                <hr />
            </div>
        </div>
    )
}
