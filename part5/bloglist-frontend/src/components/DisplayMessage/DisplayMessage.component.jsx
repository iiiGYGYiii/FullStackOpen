import "./DisplayMessage.style.css";

const displayMessage = ({ message }) =>(
  <div className={message.isBad ? "bad-msg" : "good-msg"}>
    <h2>{message.text}</h2>
  </div>
);

export default displayMessage;
