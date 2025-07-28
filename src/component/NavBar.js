import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/ractogramlogo.jpeg'
import './navbar.css'
import { useDispatch } from "react-redux"

const NavBar = () => {
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
    };
    return (
        <>
            <nav className="navbar navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-4" to='/'>
                        <img className='navlogo' alt='logo' src={logo} />
                    </NavLink>
                    <form className="d-flex me-md-5">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <Link className='nav-link text-dark fs-5 searchIcon' href='#'><i className="fa-solid fa-magnifying-glass"></i> </Link>

                        <Link to="/posts" className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house"></i></Link>
                        {localStorage.getItem("token") != null ? (
                            <Link className="nav-link text-dark fs-5" href="#">
                                <i className="fa-regular fa-heart"></i>
                            </Link>
                        ) : (
                            ""
                        )}
                        <div className="dropdown ">
                            {localStorage.getItem("token") != null ? (
                                <>
                                    {" "}
                                    <Link className="btn " href="#" role="button" data-bs-toggle="dropdown" >
                                        <img className='navbar_profile-pic ' alt='profile pic' src='https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <NavLink className='dropdown-item mt-0' to='/myprofile'> My Profile</NavLink>

                                        </li>
                                        <li><Link to="/login" onClick={() => logout()} className="dropdown-item" href="#">

                                            Logout
                                        </Link></li>

                                    </ul>
                                </>
                            ) : (
                                ""
                            )}
                        </div>

                    </form>
                </div>
            </nav>
        </>
    )
}

export default NavBar
