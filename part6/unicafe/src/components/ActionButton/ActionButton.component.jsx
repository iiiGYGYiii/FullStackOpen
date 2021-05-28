import "./ActionButton.styles.css";

const ActionButton = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

export default ActionButton;
