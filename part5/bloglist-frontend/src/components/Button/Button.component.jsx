import PropTypes from "prop-types";

import "./Button.style.css";

const Button = ({ children }) =>(
  <input value={children} type="submit" className="btn login-btn" />
);

Button.propTypes = {
  children: PropTypes.string
}

export default Button;
