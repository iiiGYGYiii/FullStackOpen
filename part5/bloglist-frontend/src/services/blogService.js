import axios from "axios";
const URI = "http://localhost:3001";

let token = null;

const setToken = newToken => token = `bearer ${newToken}`;

const getBlogs = async () =>{
  try {
    const res = await axios.get(URI+"/api/blogs");
  return res.data;  
  } catch (error) {
    console.log("There was an error", error.message);
  }
  
};

const createBlog = async(data) =>{
  const config = {
    headers: {
      Authorization: token
    }
  };
  try {
    const res = await axios.post(URI+"/api/blogs", data, config);
    return res.data;  
  } catch (error) {
    return;
  }
}

const logIn = async (data) =>{
  try {
    const res = await axios.post(URI+"/api/login", data);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    
  }
}

export {
  getBlogs,
  createBlog,
  logIn,
  setToken
};