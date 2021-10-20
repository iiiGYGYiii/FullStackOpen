import "./Button.styles.css";

export default function Button({ pageName, handleClick }) {
  return <button onClick={handleClick}>{pageName}</button>;
}
