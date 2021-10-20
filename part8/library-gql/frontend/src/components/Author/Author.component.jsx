import "./Author.styles.css";

export default function Author({ name, bookCount, born }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{born}</td>
      <td>{bookCount}</td>
    </tr>
  );
}
