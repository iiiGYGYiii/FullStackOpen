//MODULES
import { useState, useEffect } from 'react';
import { getBlogs } from "../../services/blogService";
import PropTypes from "prop-types";

//COMPONENTS
import BlogForm from "../BlogForm/BlogForm.component";
import Blog from "../Blog/Blog.component";
import Togglable from "../Togglable/Togglable.component";

import './Blogs.style.css';

const Blogs = ({ user, setUser, setMessage }) =>{
  const [blogs, setBlogs] = useState([]);

  useEffect( () =>{
    getBlogs().then(data=> setBlogs(data));
  },[]);

  return(
    <div className="blogs">
      {
        user&&<Togglable buttonLabel="Create Blog"><BlogForm setMessage={setMessage} setUser={setUser} setBlogs={setBlogs}/></Togglable>
      }
      {
        blogs.sort((a,b)=>b.likes-a.likes).map(blog => <Blog
          key={blog.id}
          title={blog.title}
          author={blog.author}
          url={blog.url}
          likes={blog.likes}
          user={blog.user.username}
          ID={blog.id}
          setBlogs={setBlogs}
          />)
      }
    </div>
  );
};

Blogs.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
};

export default Blogs;
