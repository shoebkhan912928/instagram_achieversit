// import React from 'react'
// import Card from '../component/Card'

// const PostOverveiw = () => {
//     return (
//         <div className=' container mt-md-5  mt-3'>
//             <div className='row'>
//                 <div className='col-md-4 mb-2'>
//                     <Card />
//                 </div>
//                 <div className='col-md-4 mb-2'>
//                     <Card />
//                 </div>
//                 <div className='col-md-4 mb-2'>
//                     <Card />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default PostOverveiw
import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";

const PostOverview = () => {
  const [allPosts, setAllPosts] = useState([]);

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"), // ✅ space after Bearer
    },
  };

  const getAllPost = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allposts", CONFIG_OBJ);
      if (response.status === 200) {
        setAllPosts(response.data.posts);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="container mt-md-5 mt-3">
      <div className="row">
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
            <div className="col-md-4 mb-2" key={post._id}>
              <Card postData={post} getAllPost={getAllPost} />
            </div>
          ))
        ) : (
          <h5 className="text-center mt-5">No posts available</h5>
        )}
      </div>
    </div>
  );
};

export default PostOverview;
