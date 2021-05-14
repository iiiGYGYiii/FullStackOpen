//MODULES
import PropTypes from "prop-types";
import { useState } from "react";
import { updateLikes, deleteBlogService } from "../../services/blogService";

import "./Blog.styles.css";

const Blog = ({ author, title, url, user, likes, ID, setBlogs }) => {

  const [showInfo, setShowInfo] = useState(false);
  const [likeDisplay, setLikeDisplay] = useState(likes);
  const likePost = async() => {
    await updateLikes(ID, likeDisplay);
    setLikeDisplay(prevState => prevState+1);
  };

  const changeShowInfo = () => {
    setShowInfo(prevState => !prevState);
  };

  const deleteBlog = () => {
    if(window.confirm(`You want to delete ${title} by ${author}?`)){
      deleteBlogService(ID);
      setBlogs(prevState => prevState.filter(blog => blog.id!==ID));
    }
  };

  return(
  <div className="blog-card">
    <h3> {title} </h3> <h4>By: {author} </h4>
    {showInfo?
    <>
      <hr/>
      <p> Url: {url} </p>
      <p> Posted by: {user} </p>
      <p> Likes: {likeDisplay} <span onClick={likePost} className="like-btn">Like! 👍</span></p>
      <p onClick={changeShowInfo} className="hide-info-btn"> Hide </p>
      <p>
      <span
        style={{backgroundColor:"red", color:"white", fontWeight:"bold", cursor:"pointer"}}
        onClick={deleteBlog}>
          DELETE
        </span>
      </p>
    </>:
    <p className="show-info-btn" onClick={changeShowInfo}> More Info </p>
    }
    
  </div>
);
};

Blog.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  ID: PropTypes.string.isRequired,
  setBlogs: PropTypes.func.isRequired
};

export default Blog;
