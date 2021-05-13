// MODULES
import { createBlog } from "../../services/blogService";
import { useState } from "react";

//COMPONENTS
import InputForm from "../InputForm/InputForm.component";
import Button from "../Button/Button.component";

//STYLES
import "./BlogForm.style.css";

const BlogForm = ({ setUser, setBlogs, setMessage }) =>{
  const [blog, setBlog] = useState({
    author: "",
    title: ""
  });

  const handleChange = ({ target }) =>{
    setBlog(prevState=>{
      return{
        ...prevState,
        [target.name]: target.value
      }
    })
  }


  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const data = await createBlog(blog);
      if (!data.error){
        setBlogs(prevState=>[...prevState, data]);
        setBlog({author:"",title:""});
        setMessage({isBad: false,text: "Blog was created successfully! :D"});
        setInterval(()=>{setMessage({isBad:false, text:""})}, 5000);
      }
    } catch (error) {
      setMessage({isBad: true,text: "Session has expired, login again."});
      setInterval(()=>{setMessage({isBad:false, text:""})}, 5000);
      setUser(null);
      window.localStorage.removeItem("loggedBlogUser");
    }
  }

  return(
    <form className="blog-form" onSubmit={handleSubmit}>
      <InputForm
        handleChange={handleChange}
        value={blog.title}
        type="text"
        name="title"
        label="title"
        required
      />
      <InputForm
        handleChange={handleChange}
        value={blog.author}
        type="text"
        name="author"
        label="author"
        required
      />
      <Button>
        Create
      </Button>
    </form>
  );

}

export default BlogForm;
