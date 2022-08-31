import React from "react";
import Posts from "../Posts/Posts.jsx";
import PostShare from "../PostShare/PostShare";
import NavMenu from "../NavMenu/NavMenu.jsx";
import "./PostSide.css";

const PostSide = () => {
  return (
    <div className="PostSide">
      <NavMenu/>
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
