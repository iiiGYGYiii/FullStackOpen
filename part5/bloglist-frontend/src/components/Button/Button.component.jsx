import "./Button.style.css";

const Button = ({ children }) =>(
  <input value={children} type="submit" className="login-btn" />
);

export default Button;
