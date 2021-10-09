import { useQuery } from "@apollo/client";
import { ALL_AUTHORS } from "../../logic/graphql/queries/queries";
import "./Authors.styles.css";

export default function Authors() {
  const result = useQuery(ALL_AUTHORS);
  if (result.loading) return <p>Loading...</p>;
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Born</th>
        <th>Books</th>
      </thead>
      <tbody>
        {result.data.allAuthors.map((author) => (
          <tr key={author.name}>
            <td>{author.name}</td>
            <td>{author.born}</td>
            <td>{author.bookCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
