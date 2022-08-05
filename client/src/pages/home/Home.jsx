import React from "react";
import PostSide from "../../components/PostSide/PostSide.jsx";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide.jsx";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
