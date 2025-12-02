import React, { useState, useRef, useCallback, useEffect } from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useSelector } from "react-redux"
// import Swal from 'sweetalert2';
import Swal from "sweetalert2";
// import { post } from '../../../backend/routes/file_route';


const Profile = () => {
    const user = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState({ preview: "", data: "" })
    const [myallposts, setMyAllposts] = useState([]);
    const [postDetails, setPostDetail] = useState({});
    const [caption, setCaption] = useState("")
    const [location, setLocation] = useState("")
    // frontend state variable =======================
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showPost, setShowPost] = useState(false);

    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);
    // const fileInputRef = useRef(null);

    // // const handleFileClick = () => {
    //     fileInputRef.current.click();
    // };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     console.log('Selected file:', file);
    // You can process the file here
    // };
    // frontend variavle ===============================
    const token = localStorage.getItem("token");
    // ✅ check if user is not logged in
    useEffect(() => {
        if (!token) {
            Swal.fire({
                icon: "warning",
                title: "Please log in first",
            });
            navigate("/login");
        }
    }, [token, navigate]);
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token// localStorage.getItem("token"),
        },
    };
    // const deletePost = async (postId) => {
    //     const response = await axios.delete(
    //         `http://localhost:5000/deletepost/${postId}`,
    //         CONFIG_OBJ

    //     );
    //     if (response.status === 200) {
    //         getMyPost();
    //     }
    //     setShow(false);
    // };
    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/deletepost/${postId}`,
                CONFIG_OBJ
            );
            if (response.status === 200) {
                getMyPost();
                Swal.fire({ icon: "success", title: "Post deleted" });
            }
            setShow(false);
        } catch (err) {
            Swal.fire({ icon: "error", title: "Failed to delete post" });
        }
    };
    const handleFileSelect = (event) => {
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
        };
        setImage(img)
    };
    // Function that will uploade our image to the server===
    const handleImageUpload = async () => {
        let formData = new FormData();
        formData.append("file", image.data);
        const response = axios.post(
            "http://localhost:5000/uploadFile",
            formData

        );
        return response;
    };
    // eslint disable - next -line  react hooks/ exhaustive deps=
    // const getMyPost = useCallback(async () => {
    //     const response = await axios.get(
    //         `http://localhost:5000/myallposts`,
    //         CONFIG_OBJ
    //     );
    //     // console.log(localStorage.getItem("token"));
    //     if (response.status === 200) {
    //         setMyAllposts(response.data.post);
    //     } else {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Some error occured while getting all posts",
    //         });
    //     }
    // });
    // const getMyPost = useCallback(async () => {
    //     try {
    //         const response = await axios.get(
    //             `http://localhost:5000/myallposts`,
    //             CONFIG_OBJ
    //         );
    //         if (response.status === 200) {
    //             // ✅ use fallback empty array to avoid undefined
    //             setMyAllposts(response.data.post || []);
    //         }
    //     } catch (err) {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Error fetching your posts",
    //         });
    //     }
    // }, [CONFIG_OBJ]);
    const getMyPost = useCallback(async () => {
  try {
    console.log("Fetching posts...");
    const response = await axios.get(
      "http://localhost:5000/myallposts",
      CONFIG_OBJ
    );
    console.log("Response from /myallposts:", response.data);

    if (response.status === 200) {
      setMyAllposts(response.data.posts || []); // ✅ use posts (plural)
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch posts",
      });
    }
  } catch (err) {
    console.error("Error fetching posts:", err);
    Swal.fire({
      icon: "error",
      title: "Error fetching your posts",
    });
  }
}, [CONFIG_OBJ]);

    console.log(localStorage.getItem("token"));

    const showDetail = (mypost) => {
        setPostDetail(mypost);
    };
    const addPost = async () => {
        if (image.preview === "") {
            Swal.fire({
                icon: "error",
                title: "Post image is mandatory!",
            });
        } else if (caption === "") {
            Swal.fire({
                icon: "error",
                title: "Post caption is  mandatory!",
            });
        } else if (location === "") {
            Swal.fire({
                icon: "error",
                title: "Location is mandatory!",
            });
        } else {
            setLoading(true);
            const imgRes = await handleImageUpload()
            const request = {
                description: caption,
                location: location,
                image: `http://localhost:5000/files/${imgRes.data.fileName}`,

            };
            // write api call to create post
            const postResponse = await axios.post(
                `http://localhost:5000/createpost`,
                request,
                CONFIG_OBJ
            );
            setLoading(false);
            if (postResponse.status === 201) {
                navigate("/posts")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Some error occured while creating post",
                });
            }
        }
    };
    useEffect(() => {
        getMyPost();

    }, [getMyPost])
    const currentUser = user?.user || {};
    return (
        <div className='container shadow mt-3 p-4'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column'>
                    <img className='p-2 img-fluid profile-pic' alt='post image' src='https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />
                    <div className='ms-3 fs-5 fw-bold'>{currentUser?.email || "No Email"}</div>
                    <div className='ms-3 fs-5 '>{currentUser?.fullName || "User Name"}</div>
                    <div className='ms-3 fs-5 '>UI/UX Designer @jhon | Follow <Link>@{currentUser?.fullName || "user"}</Link></div>
                    <div className='ms-3 fs-5 '>My portfolio on <Link >www.portfolio.com/jhon</Link></div>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
                    <div className='d-flex justify-content-equal mx-auto'>
                        <div className='count-section pe-4 pe-md-5 text-center fw-bold'>
                            <h4>{myallposts.length}</h4>
                            <p>Posts</p>
                        </div>
                        <div className='count-section px-4 px-md-5 text-center fw-bold'>
                            <h4>636</h4>
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
                {myallposts?.length > 0 ? (
                    myallposts.map((mypost) => (
                        <div className='col-md-4 col-sm-12 mb-3' key={mypost._id}>
                            <div className='card ' onClick={handleShow}>
                                <img
                                    onClick={() => showDetail(mypost)}
                                    className='card-img-top '
                                    alt={mypost.description}
                                    src={mypost.image}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center text-muted'>No posts yet</div>
                )}




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
                                            <img src={postDetails.image} className="d-block w-100" alt="..." />
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
                                        <p className='fs-6 fw-bold'>{user.user.fullName}</p>
                                        <p className='location'>{postDetails.location}</p>
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
                                            <li><Link className="dropdown-item" onClick={() => deletePost(postDetails._id)}>
                                                <i className="fa-sharp fa-solid fa-trash px-2"></i>
                                                Delete Post
                                            </Link></li>

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
                                    <p>{postDetails.description}</p>

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

                                        onChange={handleFileSelect}
                                    />

                                    <div className='dropZoneOverlay text-muted' >
                                        {image.preview && (
                                            <img
                                                src={image.preview}
                                                width="150px"
                                                height="150px"
                                                alt="uploaded file"
                                            />
                                        )}
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
                                        <textarea type="text" id='floatingInput' onChange={(e) => setCaption(e.target.value)} className="form-control" placeholder="Add Caption" />
                                        <label for="floatingTextarea">Add Caption</label>
                                    </div>
                                </div>
                                <div className=' col-sm-12'>
                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Add Location" />
                                        <label for="floatingInput"> <i className="fa-solid fa-location-dot pe-2"></i>Add Locatiom</label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    {loading ? (
                                        <div className="col-md-12 mt-3 text-center">
                                            <div className="spinner-border text-info" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <button onClick={() => { addPost(); }} className='costom-btn-pink costom-btn float-end' >
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
