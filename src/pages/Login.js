import './Login.css'
import socialDesktop from '../images/social-desktop.webp'
import socialMobile from '../images/photo-1611262588024-d12430b98920.avif'
import { Link, useNavigate } from 'react-router-dom'
// import Swal from "sweetalert2"
import Swal from 'sweetalert2'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = {
            email,
            password,
        };
        axios
            .post(`http://localhost:5000/login`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    setLoading(false);
                   localStorage.setItem("token", result.data.result.token);

                    localStorage.setItem("user", JSON.stringify(result.data.result.user));
                    // now we need to do dispatch of an action which will have a type and a payload
                    dispatch({ type: "LOGIN_SUCCESS", payload: result.data.result.user });
                    setLoading(false);
                    navigate("/myProfile")

                }
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: error.response.error,
                });


            });
    };
    return (

        <div className="container login-container ">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                    <img className='socialDesktop' style={{ height: "85%" }} src={socialDesktop} />
                    <img className='socialMobile' src={socialMobile} />

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
                            <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
                            <form onSubmit={(e)=>login(e)}>
                                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required className=' p-2 mt-4 mb-2 form-control input-bg' placeholder='Phone number,username, or email' />
                                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required className='p-2 form-control input-bg' placeholder='Password' />
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
                                        <Link to='/signup' className='ms-1 text-info fw-bold'>Sign Up</Link>
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
