// import React, { useState } from 'react'
// import profile from '../images/profile.avif'
// import './Card.css'
// import axios from "axios"

// const Card = (props) => {
//   // const [apppost,setAllpost] = useState([]);
//   const [commentBox, setCommentBox] = useState(false)
//   const [comment, setComment] = useState("")
//   if (!props.postData) {//is code co hatana h when i used database
//     return null;
//   }

//   const CONFIG_OBJ = {
//     headers: {
//       "Content-Type": "application/json",
//       // Authorization: "Bearer " + localStorage.getItem("token"),
//       Authorization: "Bearer " + localStorage.getItem("token"),


//     },

//   };
//   const submitComment = async (postId) => {
//     setCommentBox(false);
//     const request = { postId: postId, commentText: comment };
//     const response = await axios.put(
//       `http://localhost:5000/comment`,
//       request,
//       CONFIG_OBJ
//     );
//     if (response.status === 200) {
//       props.getAllPost()//refreshing the API request
//     }

//   };
//   // const likeDislikePost = async (postId, type) => {
//   //   const request = { postId: postId };
//   //   const response = await axios.put(
//   //     `http://localhost:5000/comment${type}`,
//   //     request,
//   //     CONFIG_OBJ
//   //   );
//   //   if (response === 200) {
//   //     props.getAllPost(); //get all post again after the process
//   //   }
//   //   //return the response 
//   // };
//   const likeDislikePost = async (postId, type) => {
//     const request = { postId };
//     const response = await axios.put(
//       `http://localhost:5000/${type}`,
//       request,
//       CONFIG_OBJ
//     );
//     if (response.status === 200) {
//       props.getAllPost(); // refresh posts
//     }
//   };

//   return (
//     <div>
//       <div className='card '>
//         <div className='card-body px'>
//           <div className='row'>
//             <div className='col-6 d-flex'>
//               <img alt='profile-pic' className='profile-pic p-2' src={profile} />
//               {/* <div className='mt-2'>
//                 <p className='fs-6 fw-bold'>    {props.postData.author.fullName}</p>
//                 <p className='location'>{props.postData.location}</p>

//               </div> */}
//               <div className='mt-2'>
//                 <p className='fs-6 fw-bold'>
//                   {props.postData?.author?.fullName || "Unknown User"}
//                 </p>

//                 <p className='location'>{props.postData?.location || "No location"}</p>
//               </div>


//             </div>
//             <div className='col-6 '>
//               <span className='float-end mt-1 p-2 fs-3'>
//                 <i className="fa-solid fa-ellipsis-vertical"></i>
//               </span>
//             </div>

//           </div>

//         </div>
//         <div className='row'>
//           <div className='col-12 yyyy'>
//             <img style={{ borderRadius: '20px' }} className='p-2 img-fluid image_heights' alt='post image' src={props.postData.image} />


//           </div>

//         </div>
//         <div className='row mt-2'>
//           <div className='col-6 d-flex'>
//             <i onClick={() => likeDislikePost(props.postData._id, "like")} className="ps-2 fs-4 fa-regular fa-thumbs-up"></i>
//             <i onClick={() => likeDislikePost(props.postData._id, "unlike")} className="ps-2 fs-4 fa-regular fa-thumbs-down"></i>
//             <i onClick={() => setCommentBox(true)} className="ps-2 fs-4 fa-regular fa-comment"></i>

//           </div>

//           <div className='col-6'>
//             <span className='pe-2 fs-6 fw-bold float-end'>  {props.postData.likes.length} likes</span>

//           </div>
//           <div className="col-12">
//             <hr />
//             <p className="ps-3 mt-2 fw-semibold">
//               {props.postData.description}
//             </p>
//           </div>
//           {commentBox ? (
//             <div className="row align-items-center justify-content-center ps-3 pe-3">
//               <div className="col-10 ">
//                 <textarea
//                   onChange={(e) => setComment(e.target.value)}
//                   className="form-control"
//                 ></textarea>
//               </div>
//               <div className="col-2">
//                 <i
//                   onClick={() => submitComment(props.postData._id)}
//                   className=" btn ps-3 fs-4 fa-regular fa-paper-plane"
//                 ></i>
//               </div>
//             </div>
//           ) : (
//             ""
//           )}
//           {/* {props.postData.comments.map((comment) => {
//             return (
//               <div className="row showww" key={comment._id}>
//                 <div className="col-12 d-flex justify-content-between ">
//                   <p className='ps-3'>{comment.commentText}</p>

//                   <p className="text-muted fst-italic" style={{ fontSize: "14px" }}>
//                     - {comment?.commentedBy?.fullName || "Anonymous"}
//                   </p>

//                 </div>
//               </div>
//             );
//           })} */}



//         </div>
//         {/* {props.postData.comments.map((comment) => {
//           return (
//             <div class="cardddd ">
//               <div class="messages " >
               
//                 <div class="message" key={comment._id}>
//                   <div class="message-icon"></div>
//                   <div class="message-info">
//                     <div class="message-header">
//                       <div class="message-title">{comment?.commentedBy?.fullName || "Anonymous"}</div>
//                       <div class="message-time">1m ago</div>
//                     </div>
//                     <div class="message-content">{comment.commentText}</div>
//                   </div>
//                 </div>
                
//               </div>
//             </div>
//           );
//         })} */}
//         {/* {props.postData.comments.map((comment) => {
//           return ( */}
//         <div className="cardddd">
//           <div className="messages">
//             {props.postData.comments.map((comment) => (
//               <div className="message" key={comment._id}>
//                 <div className="message-icon"></div>
//                 <div className="message-info">
//                   <div className="message-header">
//                     <div className="message-title">
//                       {comment?.commentedBy?.fullName || "Anonymous"}
//                     </div>
//                     <div className="message-time">1m ago</div>
//                   </div>
//                   <div className="message-content">{comment.commentText}</div>
//                 </div>
//               </div>
//              ))} 
//           </div>
//         </div>
//         {/* //  );
//         // })} */}



//         <div className='row'>
//           <div className='col-12 mt-2'>
//             <span className='p-2  text-muted'>2 Hours Ago</span>

//           </div>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Card
import React, { useState } from 'react';
import profile from '../images/profile.avif';
import './Card.css';
import axios from "axios";
import Swal from "sweetalert2";

const Card = (props) => {
  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // 👈 new state for dropdown

  if (!props.postData) {
    return null;
  }

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  // 🟢 Submit Comment
  const submitComment = async (postId) => {
    try {
      setCommentBox(false);
      const request = { postId, commentText: comment };
      const response = await axios.put(`http://localhost:5000/comment`, request, CONFIG_OBJ);
      if (response.status === 200) {
        props.getAllPost();
      }
    } catch (error) {
      Swal.fire({ icon: "error", title: "Failed to add comment" });
    }
  };

  // 🟢 Like or Dislike
  const likeDislikePost = async (postId, type) => {
    try {
      const request = { postId };
      const response = await axios.put(`http://localhost:5000/${type}`, request, CONFIG_OBJ);
      if (response.status === 200) {
        props.getAllPost();
      }
    } catch (error) {
      Swal.fire({ icon: "error", title: "Something went wrong!" });
    }
  };

  // 🟢 Delete Post
  const deletePost = async (postId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won’t be able to recover this post!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:5000/deletepost/${postId}`, CONFIG_OBJ);
        if (response.status === 200) {
          props.getAllPost();
          Swal.fire("Deleted!", "Your post has been deleted.", "success");
        }
      }
      setShowDropdown(false);
    } catch (error) {
      Swal.fire({ icon: "error", title: "Failed to delete post" });
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body px">
        <div className="row">
          <div className="col-6 d-flex">
            <img alt="profile-pic" className="profile-pic p-2" src={profile} />
            <div className="mt-2">
              <p className="fs-6 fw-bold">
                {props.postData?.author?.fullName || "Unknown User"}
              </p>
              <p className="location">{props.postData?.location || "No location"}</p>
            </div>
          </div>

          {/* ⋮ Dropdown Menu */}
          <div className="col-6 text-end position-relative">
            <i
              className="fa-solid fa-ellipsis-vertical fs-4 p-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowDropdown(!showDropdown)}
            ></i>

            {showDropdown && (
              <div
                className="dropdown-menu show p-2 shadow-sm"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "40px",
                  background: "white",
                  borderRadius: "10px",
                  zIndex: 10,
                }}
              >
                <button
                  className="dropdown-item text-danger"
                  onClick={() => deletePost(props.postData._id)}
                >
                  <i className="fa-solid fa-trash me-2"></i> Delete Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="row">
        <div className="col-12 yyyy">
          <img
            style={{ borderRadius: '20px' }}
            className="p-2 img-fluid image_heights"
            alt="post"
            src={props.postData.image}
          />
        </div>
      </div>

      {/* Like / Comment */}
      <div className="row mt-2">
        <div className="col-6 d-flex">
          <i
            onClick={() => likeDislikePost(props.postData._id, "like")}
            className="ps-2 fs-4 fa-regular fa-thumbs-up"
          ></i>
          <i
            onClick={() => likeDislikePost(props.postData._id, "unlike")}
            className="ps-2 fs-4 fa-regular fa-thumbs-down"
          ></i>
          <i
            onClick={() => setCommentBox(true)}
            className="ps-2 fs-4 fa-regular fa-comment"
          ></i>
        </div>
        <div className="col-6 text-end">
          <span className="pe-2 fs-6 fw-bold">
            {props.postData.likes.length} likes
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="col-12">
        <hr />
        <p className="ps-3 mt-2 fw-semibold">{props.postData.description}</p>
      </div>

      {/* Comment Box */}
      {commentBox && (
        <div className="row align-items-center justify-content-center ps-3 pe-3">
          <div className="col-10">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="form-control"
              placeholder="Write a comment..."
            ></textarea>
          </div>
          <div className="col-2">
            <i
              onClick={() => submitComment(props.postData._id)}
              className="btn ps-3 fs-4 fa-regular fa-paper-plane"
            ></i>
          </div>
        </div>
      )}

      {/* Comments */}
      <div className="cardddd">
        <div className="messages">
          {props.postData.comments.map((comment) => (
            <div className="message" key={comment._id}>
              <div className="message-icon"></div>
              <div className="message-info">
                <div className="message-header">
                  <div className="message-title">
                    {comment?.commentedBy?.fullName || "Anonymous"}
                  </div>
                  <div className="message-time">1m ago</div>
                </div>
                <div className="message-content">{comment.commentText}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-12 mt-2">
          <span className="p-2 text-muted">2 Hours Ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

