// MODULES
import { Link } from "react-router-dom";
// STYLES
import "./Header.styles.css"
// COMPONENTS

const Header = () =>{
  return (<header>
    <Link to="/"> Home </Link>
    <Link to="/create"> Create New </Link>
    <Link to="/about"> About </Link>
  </header>);
};

export default Header;
