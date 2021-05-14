import PropTypes from "prop-types";
import "./DisplayMessage.style.css";

const displayMessage = ({ message }) =>(
  <div className={message.isBad ? "bad-msg" : "good-msg"}>
    <h2>{message.text}</h2>
  </div>
);

// eslint-disable-next-line react/no-typos
displayMessage.PropTypes = {
  message: PropTypes.object.isRequired
};

export default displayMessage;
