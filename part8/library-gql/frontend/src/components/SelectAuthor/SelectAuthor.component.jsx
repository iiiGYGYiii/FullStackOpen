import "./SelectAuthor.styles.css";

export default function SelectAuthor({ formValues, allAuthors, handleChange }) {
  return (
    <label>
      <select value={formValues.name} onChange={handleChange}>
        {allAuthors.map((author) => (
          <option value={author} key={author}>
            {author}
          </option>
        ))}
      </select>
    </label>
  );
}
