import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft.jsx";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";
import PostShare from "../../components/PostShare/PostShare.jsx";
import Posts from "../../components/Posts/Posts.jsx";
import RightSide from "../../components/RightSide/RightSide.jsx";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <NavMenu/>
        <ProfileCard location="profilePage" />
        <PostShare />
        <Posts />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
