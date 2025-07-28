import React, { useState ,useRef} from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);
    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('Selected file:', file);
        // You can process the file here
    };
    return (
        <div className='container shadow mt-3 p-4'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column'>
                    <img className='p-2 img-fluid profile-pic' alt='post image' src='https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />
                    <p className='ms-3 fs-5 fw-bold'>jhon_due</p>
                    <p className='ms-3 fs-5 '>jhon Due</p>
                    <p className='ms-3 fs-5 '>UI/UX Designer @jhon | Follow @jhomdue</p>
                    <p className='ms-3 fs-5 '>My portfolio on <a href='#'>www.portfolio.com/jhon</a></p>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
                    <div className='d-flex justify-content-equal mx-auto'>
                        <div className='count-section pe-4 pe-md-5 text-center fw-bold'>
                            <h4>10</h4>
                            <p>Post</p>
                        </div>
                        <div className='count-section px-4 px-md-5 text-center fw-bold'>
                            <h4>10</h4>
                            <p>Followers</p>
                        </div>
                        <div className='ps-4 ps-md-5 text-center fw-bold'>
                            <h4>10</h4>
                            <p>Following</p>
                        </div>
                    </div>
                    <div className='mx-auto mt-md-0 mt-4 button-wrapper '>
                        <button className='costom-btn-white costom-btn me-md-3 gallry1'>
                            <span className=' fs-6'>Edit Profile</span>

                        </button>
                        <button className='costom-btn-white costom-btn gallry2' onClick={handlePostShow}>
                            <span className=' fs-6'>Upload Post</span>

                        </button>
                    </div>
                </div>

            </div>
            <div className='row my-3'>
                <div className='col-12'>
                    <div>
                        <hr />
                    </div>

                </div>

            </div>
            <div className='row '>
                <div className='col-md-4 col-sm-12 mb-3 '>
                    <div className="card" onClick={handleShow}>
                        <img className="card-img-top" alt="flower" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />

                    </div>
                </div>
                <div className='col-md-4 col-sm-12 mb-3 '>
                    <div className="card">
                        <img className="card-img-top" alt="flower" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />

                    </div>
                </div>
                <div className='col-md-4 col-sm-12 mb-3'>
                    <div className="card">
                        <img className="card-img-top" alt="flower" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />

                    </div>
                </div>


            </div>
            <div className='row '>
                <div className='col-md-4 col-sm-12 mb-3 '>
                    <div className="card">
                        <img className="card-img-top" alt="flower" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />

                    </div>
                </div>
                <div className='col-md-4 col-sm-12 mb-3 '>
                    <div className="card">
                        <img className="card-img-top" alt="flower" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />

                    </div>
                </div>
                <div className='col-md-4 col-sm-12 mb-3'>
                    <div className="card">
                        <img className="card-img-top" alt="flower" src="https://images.unsplash.com/photo-1444930694458-01babf71870c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D" />

                    </div>
                </div>


            </div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>


                    {/* <span className='float-end mt-1 p-2 fs-3'>
                        <i className="fa-solid fa-ellipsis"></i>
                    </span> */}
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1703769605314-502c031fe751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1703820497309-333df13052f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>


                            <div className='row'>
                                <div className='col-6 d-flex'>
                                    <img className=' profile-pic p-2' alt='profile pic' src='https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />
                                    <div className='mt-2 ms-2'>
                                        <p className='fs-6 fw-bold'>Tittle</p>
                                        <p className='location'>Description</p>
                                    </div>
                                    <div className="dropdown ms-4">
                                        <a className="btn " href="#" role="button" data-bs-toggle="dropdown" >
                                            <span className='float-end  fs-3 '>
                                                <i className="fa-solid fa-ellipsis"></i>
                                            </span>
                                        </a>

                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">
                                                <i className="fa-regular fa-pen-to-square px-2"></i>
                                                Edit Post
                                            </a></li>
                                            <li><a className="dropdown-item" href="#">
                                                <i className="fa-sharp fa-solid fa-trash px-2"></i>
                                                Delete Post
                                            </a></li>

                                        </ul>
                                    </div>
                                </div>
                                {/* <div className='col-6'>
                                    <span className='float-end mt-1 p-2 fs-3'>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </span>
                                </div> */}
                            </div>
                            <div className='row'>
                                <div className='col-12 mt-2'>
                                    <span className='p-2  text-muted'>2 Hours Ago</span>

                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div className='col-12 ms-2'>
                                    <p>Lorem section</p>

                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-6 d-flex'>
                                    <i className="ps-2 fs-4 fa-regular fa-heart"></i>
                                    <i className="ps-2 fs-4 fa-regular fa-comment"></i>
                                    <i className="ps-2 fs-4 fa-solid fa-location-arrow"></i>

                                </div>

                                <div className='col-12 mt-3 ms-2'>
                                    <span className=' fs-6 fw-bold '>200 likes</span>

                                </div>

                            </div>




                        </div>



                    </div>

                </Modal.Body>

            </Modal>
            <Modal show={showPost} onHide={handlePostClose} size='lg' centered>
                <Modal.Header closeButton>
                    <span className='fw-bold fs-6'> Upload Post</span>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        {/* <div className='col-md-6 col-sm-12 mb-3'>
                            <div className='upload-box'>
                                <div className='dropZoneContainer'>
                                    <input type='file' id='drop_zone' className='fileUpload' accept='.jpg,.png,gif' onChange='handlefilessection(this)' />
                                    <div className='dropZoneOverlay'><i className="fa-solid fa-cloud-arrow-up fs-1"></i><br />Upload Photo From Computer</div>
                                </div>
                            </div>

                        </div> */}
                        <div className='col-md-6 col-sm-12 mb-3'>
                            <div className='upload-box'>
                                <div className='dropZoneContainer'>
                                    <input
                                        type='file'
                                        id='drop_zone'
                                        className='fileUpload'
                                        accept='.jpg,.png,.gif'
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />
                                    <div className='dropZoneOverlay' onClick={handleFileClick}>
                                        <i className="fa-solid fa-cloud-arrow-up fs-1"></i><br />
                                        Upload Photo From Computer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
                            <div className='row'>
                                <div className=' col-sm-12 mb-3'>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Add Caption" ></textarea>
                                        <label for="floatingTextarea">Add Caption</label>
                                    </div>
                                </div>
                                <div className=' col-sm-12'>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Add Location" />
                                        <label for="floatingInput"> <i className="fa-solid fa-location-dot pe-2"></i>Add Locatiom</label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <button className='costom-btn-pink costom-btn float-end' >
                                        <span className=' fs-6 fw-700'> Post</span>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>


        </div>
    )
}

export default Profile
