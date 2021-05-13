//COMPONENTS
import LogInForm from "../LogInForm/LogInForm.component";

import './NavBar.style.css';


const NavBar = ({ user, setUser, setMessage }) =>{
  return(
    <div className="navbar">
      {
        user?
        <>
        <h3> Hello {user.username}!</h3>
        <p className="log-out" onClick={() => {
          setUser(null)
          window.localStorage.removeItem("loggedBlogUser");
          }}>Log out</p>
        </>:
        <>
      <div>
        <h3>Please Log In.</h3>
      </div>
      <LogInForm
        setUser={setUser}
        setMessage={setMessage}
      /></>
      }
    </div>
  );
};

export default NavBar;
