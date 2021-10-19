import { useQuery } from "@apollo/client";
import { ALL_AUTHORS } from "../../logic/graphql/queries/queries";
import { Author, ChangeAuthorForm } from "..";
import "./Authors.styles.css";

export default function Authors({ setError }) {
  const result = useQuery(ALL_AUTHORS);
  if (result.loading) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Born</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>
          {result.data.allAuthors.map((author) => (
            <Author key={author.name} {...author} />
          ))}
        </tbody>
      </table>
      <ChangeAuthorForm
        allAuthors={result.data.allAuthors.map((v) => v.name)}
        setError={setError}
      />
    </div>
  );
}
