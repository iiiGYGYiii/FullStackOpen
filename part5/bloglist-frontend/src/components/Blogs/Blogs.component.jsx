//MODULES
import { useState, useEffect } from 'react';
import { getBlogs } from "../../services/blogService";

//COMPONENTS
import BlogForm from "../BlogForm/BlogForm.component";
import Blog from "../Blog/Blog.component";

import './Blogs.style.css';

const Blogs = ({ user, setUser, setMessage }) =>{
  const [blogs, setBlogs] = useState([]);

  useEffect( () =>{
    getBlogs().then(data=> setBlogs(data));
  },[]);

  return(
    <div className="blogs">
      {
        user&&<BlogForm setMessage={setMessage} setUser={setUser} setBlogs={setBlogs}/>
      }
      {
        blogs.map(blog => <Blog key={blog.id} title={blog.title} author={blog.author}/>)
      }
    </div>
  );
};

export default Blogs;
