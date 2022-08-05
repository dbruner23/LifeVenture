import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  return (
    <div className="Post">
      <img src={data.image ? 'http://localhost:4000/images/' + data.image : "" } alt="" />

      <div className="postReact">
        <img src={data.liked ? Like : NotLike} />
        <img src={Comment} />
        <img src={Share} />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes}likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
