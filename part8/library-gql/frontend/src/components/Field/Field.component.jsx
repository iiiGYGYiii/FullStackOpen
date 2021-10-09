import "./Field.styles.css";

export default function Field({ name, value, handleChange }) {
  return (
    <label>
      {" "}
      {name[0].toUpperCase() + name.slice(1)}{" "}
      <input onChange={handleChange} name={name} value={value} />
    </label>
  );
}
