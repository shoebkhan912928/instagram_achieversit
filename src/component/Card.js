import React, {useState} from 'react'
import profile from '../images/profile.avif'
import './Card.css'
import axios from "axios"

const Card = (props) => {
  // const [apppost,setAllpost] = useState([]);
  const [commentBox,setCommentBox]=useState(false)
  const [comment, setComment]=useState("")
  const CONFIG_OBJ={
    headers:{
      "Content-Type":"application/json",
      Authorization:"Bearer" + localStorage.getItem("token"),

    },

  };
  const submitComment=async (postId)=>{
    setCommentBox(false);
    const request = {postId:postId,commentText:comment};
    const response =await axios.put(
      `http://localhost:5000/comment`,
      request,
      CONFIG_OBJ
    );
    if(response.status===200){
      props.getAllPost()//refreshing the API request
    }
    
  };
  const likeDislikePost=async (postId,type)=>{
    const request ={postId:postId};
    const response = await axios.put(
      `http://localhost:5000/comment${type}`,
      request,
      CONFIG_OBJ
    );
    if(response===200){
      props.getAllPost(); //get all post again after the process
    }
    //return the response 
  };
  return (
    <div>
      <div className='card shadow'>
        <div className='card-body px'>
          <div className='row'>
            <div className='col-6 d-flex'>
              <img alt='profile-pic' className='profile-pic p-2' src={profile} />
              <div className='mt-2'>
                <p className='fs-6 fw-bold'>    {props.postData.author.fullName}</p>
                <p className='location'>{props.postData.location}</p>

              </div>

            </div>
            <div className='col-6 '>
              <span className='float-end mt-1 p-2 fs-3'>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>

          </div>

        </div>
        <div className='row'>
          <div className='col-12'>
            <img style={{ borderRadius: '15px' }} className='p-2 img-fluid' alt='post image' src={props.postData.image} />


          </div>

        </div>
        <div className='row mt-2'>
          <div className='col-6 d-flex'>
            <i onClick={()=>likeDislikePost(props.postData._id,"like")} className="ps-2 fs-4 fa-regular fa-thumbs-up"></i>
            <i onClick={()=>likeDislikePost(props.postData._id,"unlike")} className="ps-2 fs-4 fa-regular fa-thumbs-down"></i>
            <i onClick={()=>setCommentBox(true)} className="ps-2 fs-4 fa-solid fa-location-arrow"></i>

          </div>

          <div className='col-6'>
            <span className='pe-2 fs-6 fw-bold float-end'>200 likes</span>

          </div>

        </div>
        <div className='row'>
          <div className='col-12 mt-2'>
            <span className='p-2  text-muted'>2 Hours Ago</span>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Card
