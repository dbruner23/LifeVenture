import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadS3, uploadPost } from "../../actions/uploadAction.js";
import { Wrapper} from "@googlemaps/react-wrapper"
import { useEffect } from "react";

window.Buffer = window.Buffer || require("buffer").Buffer;


const PostShare = () => {
  const loading = useSelector((state)=>state.postReducer.uploading)
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef()
  const { user } = useSelector((state) => state.authReducer.authData)
  const s3url = `https://${process.env.REACT_APP_BUCKET_NAME}.s3-${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com/`

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  }

  //Map setup
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value
    };

    if (image) {
      const fileName = user._id + Date.now() + image.name;
      newPost.image = fileName;
      try {
        await uploadS3(image, fileName)
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(uploadPost(newPost))
    reset();
  }
  

  return (
    <div className="PostShare">
      <img src={user.profilePicture ? s3url + user.profilePicture : s3url + "Defaults/default-user.png"} alt="" />
      <div>
        <input ref={desc} required type="text" placeholder="Create new LifeVenture" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSubmit} disabled={loading}
          >{loading? "Uploading..." : "Share"}</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
