import React from 'react'
import './Login.css'
import socialDesktop from '../images/social-desktop.webp'
import socialMobile from '../images/photo-1611262588024-d12430b98920.avif'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (

        <div className="container login-container ">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                    <img className='socialDesktop' style={{ height: "85%" }} src={socialDesktop} />
                    <img className='socialMobile' src={socialMobile} />

                </div>
                <div className="col-md-5 col-sm-12 ">
                    <div className="card shadow " >
                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
                            <form>
                                <input type='text' className=' p-2 mt-4 mb-2 form-control input-bg' placeholder='Phone ' />
                                <input type='email' className=' p-2  mb-2 form-control input-bg' placeholder='Email' />
                                <input type='text' className=' p-2  mb-2 form-control input-bg' placeholder='Full Name' />
                                <input type='password' className='p-2 form-control input-bg' placeholder='Password' />
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
