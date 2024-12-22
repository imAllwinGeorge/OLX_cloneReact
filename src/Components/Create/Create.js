// import React, { Fragment, useContext, useState } from "react";
// import "./Create.css";
// import Header from "../Header/Header";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { FirebaseContext, AuthContext } from "../../store/firebaseContext";

// const Create = () => {
//   const { firebase } = useContext(FirebaseContext);
//   const { user } = useContext(AuthContext);
//   const history = useHistory();
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null); // Ensure image is null initially
//   const [uploadImageURL, setUploadImageURL] = useState(""); // New State
//   const date = new Date();

//   const handleSubmit = async () => {
//     if (!image) {
//       alert("Please upload an image!");
//       return;
//     }

//     const data = new FormData();
//     data.append("file", image); // Use the image state here
//     data.append("upload_preset", "first_time_using_cloudinary");
//     data.append("cloud_name", "dpwpym34l");

//     try {
//       // Uploading to Cloudinary
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dpwpym34l/image/upload",
//         {
//           method: "POST",
//           body: data,
//         }
//       );
//       const uploadResponse = await res.json();
//       setUploadImageURL(uploadResponse.url);

//       // Storing details in Firebase
//       await firebase.firestore().collection("products").add({
//         name,
//         category,
//         price,
//         url: uploadResponse.url,
//         userId: user.uid,
//         createdAt: date.toDateString(),
//       });

//       alert("Product added successfully!");
//       history.push("/");
//     } catch (error) {
//       console.error("Error uploading image or saving to Firebase: ", error);
//     }
//   };

//   return (
//     <Fragment>
//       <Header />
//       <card>
//         <div className="centerDiv">
//           <label htmlFor="fname">Name</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             id="fname"
//             name="Name"
//           />
//           <br />
//           <label htmlFor="fname">Category</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             id="fname"
//             name="category"
//           />
//           <br />
//           <label htmlFor="fname">Price</label>
//           <br />
//           <input
//             className="input"
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             id="fname"
//             name="Price"
//           />
//           <br />
//           <br />
//           {uploadImageURL && (
//             <img
//               alt="Uploaded Post"
//               width="200px"
//               height="200px"
//               src={uploadImageURL.url}
//             />
//           )}
//           <br />
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])} // Store file in state
//           />
//           <br />
//           <button onClick={handleSubmit} className="uploadBtn">
//             Upload and Submit
//           </button>
//         </div>
//       </card>
//     </Fragment>
//   );
// };

// export default Create;



import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FirebaseContext, AuthContext } from "../../store/firebaseContext";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); // Initial state for the file
  const [uploadImageURL, setUploadImageURL] = useState(""); // State for storing the uploaded image URL
  const date = new Date();

  // const handleSubmit = async () => {
  //   if (!name || !category || !price || !image) {
  //     alert("All fields are required, including an image!");
  //     return;
  //   }
  
  //   const data = new FormData();
  //   data.append("file", image); // Append image file
  //   data.append("upload_preset", "first_time_using_cloudinary"); // Unsigned preset name
  //   data.append("cloud_name", "dpwpym34l");
  
  //   try {
  //     // Upload image to Cloudinary
  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/dpwpym34l/image/upload",
  //       {
  //         method: "POST",
  //         body: data,
  //       }
  //     );
  
  //     if (!res.ok) {
  //       const errorResponse = await res.json();
  //       console.error("Cloudinary Error Response:", errorResponse);
  //       alert("Failed to upload the image. Check Cloudinary setup.");
  //       return;
  //     }
  
  //     const uploadResponse = await res.json();
  //     setUploadImageURL(uploadResponse.url);
  
  //     // Add product details to Firebase
  //     await firebase.firestore().collection("products").add({
  //       name,
  //       category,
  //       price,
  //       url: uploadResponse.url,
  //       userId: user.uid,
  //       createdAt: date.toDateString(),
  //     });
  
  //     alert("Product added successfully!");
  //     history.push("/");
  //   } catch (error) {
  //     console.error("Error uploading image or saving to Firebase:", error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };
  

  // const handleSubmit = async (event) => {
  //   const file = event.target.files[0]
  //   console.log(file)
  
  //   const data = new FormData();
  //   data.append("file", file);
  //   data.append("upload_preset", "first_time_using_cloudinary");
  //   data.append("cloud_name","dpwpym34l")
  
  //   try {
  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/dpwpym34l/image/upload",
  //       {
  //         method: "POST",
  //         body: data,
  //       }
  //     );
  
  //     if (!res.ok) {
  //       const errorResponse = await res.json();
  //       console.error("Cloudinary Error Response:", errorResponse);
  //       alert(
  //         `Error uploading image: ${errorResponse.error?.message || "Unknown error"}`
  //       );
  //       return;
  //     }
  
  //     const uploadResponse = await res.json();
  //     setUploadImageURL(uploadResponse.url);
  
  //     await firebase.firestore().collection("products").add({
  //       name,
  //       category,
  //       price,
  //       url: uploadResponse.url,
  //       userId: user.uid,
  //       createdAt: date.toDateString(),
  //     });
  
  //     alert("Product added successfully!");
  //     history.push("/");
  //   } catch (error) {
  //     console.error("Error uploading image or saving to Firebase:", error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };
  

  const handleSubmit = async (event) => {
    console.log(image)
    
  
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "olx_clone");
  
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dpwpym34l/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
  
      if (!res.ok) {
        const errorResponse = await res.json();
        console.error("Cloudinary Error Response:", errorResponse);
        alert(`Image upload failed: ${errorResponse.error?.message || "Unknown error"}`);
        return;
      }
  
      const uploadResponse = await res.json();
      console.log("Cloudinary Upload Response:", uploadResponse);
  
      if (!uploadResponse.url) {
        alert("Image upload failed. URL not returned.");
        return;
      }
  
      setUploadImageURL(uploadResponse.url);
  
      await firebase.firestore().collection("products").add({
        name,
        category,
        price,
        url: uploadResponse.url,
        userId: user.uid,
        createdAt: date.toDateString(),
      });
  
      alert("Product added successfully!");
      history.push("/");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fname"
            name="Name"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="fname"
            name="category"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="fname"
            name="Price"
          />
          <br />
          <br />
          {uploadImageURL && (
            <img
              alt="Uploaded Post"
              width="200px"
              height="200px"
              src={uploadImageURL} // Use the string URL directly
            />
          )}
          <br />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])} // File input handler
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            Upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
