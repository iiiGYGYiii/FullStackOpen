//MODULES
import {useState} from "react";
import { logIn } from "../../services/blogService";
import PropTypes from "prop-types";

//COMPONENTS
import InputForm from "../InputForm/InputForm.component";
import Button from "../Button/Button.component";

import "./LogInForm.style.css";

const LogInForm = ({ setUser, setMessage }) =>{

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    setUserCredentials(prevState=>{
      return{
        ...prevState,
        [target.name]: target.value
      }
    })
  };

  const handleLogInClick = async (e) =>{
    e.preventDefault();
    try {
      const data = await logIn(userCredentials);
      if (!data.error){
        setUserCredentials(prevState=>{
          return{
            ...prevState,
            username: "",
            password:""
          };
        });
        window.localStorage.setItem("loggedBlogUser", JSON.stringify(data));
        setUser(data);
      }
    } catch (error) {
      setMessage(prevState=>{
        return{
          ...prevState,
          isBad: true,
          text: "Username or Password incorrect."
        }
      });
      setInterval(()=>{
        setMessage(prevState=>{
          return{
            ...prevState,
            text:""
          }
        });
      }, 5000);
    }
  };

  return (
  <form onSubmit={handleLogInClick}>
    <InputForm
      handleChange={handleChange}
      value={userCredentials.username}
      type="text"
      name="username"
      label="username"
      required
    />
    <InputForm
      handleChange={handleChange}
      value={userCredentials.password}
      type="password"
      name="password"
      label="password"
      required
    />
    <Button id="log-in">
      Log In
    </Button>
  </form>
  );
}

LogInForm.propTypes ={
  setUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
};

export default LogInForm;
