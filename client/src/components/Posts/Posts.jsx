import React from "react";
import "./Posts.css";
import Post from "../Post/Post.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/postAction.js";
import { useParams } from "react-router-dom"

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)
  
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return 'No Posts';
  if (params.id) posts = posts.filter((post)=> post.userId===params.id)

  return (
    <div className="Posts">
      {loading ? "Fetching Posts..." :
        posts.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
