import React, { useState } from 'react'
import './Login.css'
import socialDesktop from '../images/social-desktop.webp'
import socialMobile from '../images/photo-1611262588024-d12430b98920.avif'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2'


const Signup = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const signup = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { fullName: fullName, email, password };
        axios
            .post(`http://localhost:5000/signup`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: "success",
                        title: "User successfully registered",
                    });
                    navigate("/login");
                }
                setFullName("");
                setEmail("");
                setPassword("");


            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: error.response.data.error,
                });
            });
    };
    return (

        <div className="container login-container ">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                    <img className='socialDesktop' style={{ height: "85%" }} src={socialDesktop}  alt='pro'/>
                    <img className='socialMobile' src={socialMobile} alt='ind' />

                </div>
                <div className="col-md-5 col-sm-12 ">
                    <div className="card shadow " >
                        {loading ? (
                            <div className="col-md-12 mt-3 text-center">
                                <div className="spinner-border text-info" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
                            <form onSubmit={(e)=>signup(e)}>
                                {/* <input type='text' className=' p-2 mt-4 mb-2 form-control input-bg' placeholder='Phone ' /> */}
                                <input type='text' value={fullName} onChange={(e)=>setFullName(e.target.value)} required className=' p-2  mb-2 form-control input-bg' placeholder='Full Name' />

                                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required className=' p-2  mb-2 form-control input-bg' placeholder='Email' />
                                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required className='p-2 form-control input-bg' placeholder='Password' />
                                <div className='d-grid mt-3'>
                                    <button type='submit' className='custom-btn custom-btn-blue '>Sign Up</button>
                                </div>
                                <div className='my-4 '>
                                    <div className="hr-or-hr">
                                        <hr />
                                        <span>Or</span>
                                        <hr />
                                    </div>
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className='costom_button_sign costom-btn'>
                                        <span className='text-muted fs-6'>Already have  an account?</span>
                                        <Link to='/login' className='ms-1 text-info fw-bold'>Sign Up</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Signup
