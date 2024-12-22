// import React,{useEffect,useState,useContext} from 'react';

// import './View.css';
// import { PostContext } from '../../store/postContext';
// import { FirebaseContext } from '../../store/firebaseContext';
// function View() {
//   const [userDetails,setUserDetails] =useState()
//   const {postDetails} = useContext(PostContext)
//   const {firebase} = useContext(FirebaseContext)
//   useEffect(()=>{
//     const {userId} = PostContext
//     firebase.firestore.collection('users').where('id','==',userId).get().then((res)=>{
//       res.forEach(doc=>{
//         setUserDetails(doc.data())
//       })
//     })
//   },[])
//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img
//           src={postDetails.price}
//           alt=""
//         />
//       </div>
//       <div className="rightSection">
//         <div className="productDetails">
//           <p>&#x20B9; 250000 </p>
//           <span>YAMAHA R15V3</span>
//           <p>Two Wheeler</p>
//           <span>Tue May 04 2021</span>
//         </div>
//         {userDetails&&<div className="contactDetails">
//           <p>Seller details</p>
//           <p>{userDetails.username}</p>
//           <p>{userDetails.phone}</p>
//         </div>}
//       </div>
//     </div>
//   );
// }
// export default View;





import React, { useEffect, useState, useContext } from "react";
import "./View.css";
import { PostContext } from "../../store/postContext";
import { FirebaseContext } from "../../store/firebaseContext";

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext); // Correctly access postDetails from context
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetails; // Extract userId from postDetails
    if (userId) {
      firebase
        .firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        })
        .catch((err) => console.error("Error fetching user details:", err));
    }
  }, [firebase, postDetails]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url || ""}
          alt={postDetails?.name || "Product Image"}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price || "N/A"}</p>
          <span>{postDetails?.name || "Product Name"}</span>
          <p>{postDetails?.category || "Category"}</p>
          <span>{postDetails?.createdAt || "Date"}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
