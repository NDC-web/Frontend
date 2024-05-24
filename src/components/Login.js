import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({email: "", password: ""}) 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/userlogin/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.status){
            localStorage.setItem('token', json.authtoken); 
            navigate('/')
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-center mt-3" style={{ fontSize: '30px', fontWeight: 500 }}>Login</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="email" id='name' name="email" value={credentials.email} className="form-control" placeholder="email"  onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <input type="password" id='password' name="password" value={credentials.password} className="form-control" placeholder="Password" onChange={onChange} />
                            </div>
                            <a href="/forgotPassword" className="">Click here if you forgot your Password</a>
                            <br />
                            <button type="submit" className="btn btn-primary loginbtn mt-2">Login</button>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <div className="login1 pt-2 ps-2">
                            <p className="ms-3">Has your membership expired? <b>Renewing is easy!</b> </p>
                        </div>
                        <div className="login2 pt-4">
                            <ul>
                                <li>
                                    <p>Click "Forgot your Password" & enter your email address</p>
                                </li>
                                <li>
                                    <p>Check your email & click the link under "Forgot your Password"</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="login3">

                </div>
            </div>

            <div className="container my-5">
                <hr />
            </div>
        </div>
    )
}
