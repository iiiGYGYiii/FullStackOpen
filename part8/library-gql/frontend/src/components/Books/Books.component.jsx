import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../../logic/graphql/queries/queries";

import "./Books.styles.css";

import { Book } from "..";

export default function Books() {
  const result = useQuery(ALL_BOOKS);
  if (result.loading) return <p>Loading...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {result.data.allBooks.map((book) => (
          <Book key={book.title} {...book} />
        ))}
      </tbody>
    </table>
  );
}
