import "./Book.styles.css";

export default function Book({ title, author, published }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{published}</td>
    </tr>
  );
}
