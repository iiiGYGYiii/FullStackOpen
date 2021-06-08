import axios from 'axios';
const URI = "http://localhost:3001/api/users";

export const getUsers = async () =>{
  const users = await axios.get(URI);
  return users.data;
}

export const signUp = async ({ user, username, password}) =>{
  const createUser = {
    user, username, password
  };
  const response = await axios.post(URI, createUser);
  return response.data;
}

export const getUser = async id =>{
  const user = await axios.get(URI+"/"+id);
  return user.data
}
