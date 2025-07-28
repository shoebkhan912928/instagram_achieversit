import './Login.css'
import socialDesktop from '../images/social-desktop.webp'
import socialMobile from '../images/photo-1611262588024-d12430b98920.avif'
import { Link } from 'react-router-dom'
const Login = () => {
    return (

        <div className="container login-container ">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                    <img className='socialDesktop' style={{height:"85%"}} src={socialDesktop} />
                    <img className='socialMobile' src={socialMobile}/>

                </div>
                <div className="col-md-5 col-sm-12 ">
                    <div className="card shadow " >
                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
                            <form>
                                <input type='email' className=' p-2 mt-4 mb-2 form-control input-bg' placeholder='Phone number,username, or email' />
                                <input type='password' className='p-2 form-control input-bg' placeholder='Password' />
                                <div className='d-grid mt-3'>
                                    <button type='submit' className='custom-btn custom-btn-blue '>Log In</button>
                                </div>
                                 <div className='my-4 '>
                                    <div className="hr-or-hr">
                                        <hr />
                                        <span>Or</span>
                                        <hr />
                                    </div>
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className=' costom_button_sign costom-btn'>
                                        <span className='text-muted fs-6'>Don't have  an account?</span>
                                        <Link to='/signup' className='ms-1 text-info fw-bold'>Login</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Login
