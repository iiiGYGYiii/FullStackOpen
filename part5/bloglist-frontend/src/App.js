// MODULES
import {useState, useEffect } from 'react';
import { setToken } from "./services/blogService";

//COMPONENTS
import NavBar from './components/NavBar/NavBar.component';
import Blogs from './components/Blogs/Blogs.component'
import DisplayMessage from "./components/DisplayMessage/DisplayMessage.component";

import './App.css';



function App() {

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState({
    text: "",
    isBad: false
  });

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem("loggedBlogUser");
    if (loggedUserJSON){
      const loggedUser = JSON.parse(loggedUserJSON);
      setUser(loggedUser);
      setToken(loggedUser.token);
    }
  },[]);

  return (
    <div className="App">
      <div className="navbar-main">
        <NavBar
          user={user}
          setUser={setUser}
          setMessage={setMessage}
        />
      </div>
      <div className="body-main">
        {message.text.length!==0&&<DisplayMessage message={message}/>}
        <Blogs
          user={user}
          setUser={setUser}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}

export default App;
