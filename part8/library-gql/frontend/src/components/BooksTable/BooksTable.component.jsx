import { Book } from "..";

const BooksTable = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Published</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book key={book.title} {...book} />
      ))}
    </tbody>
  </table>
);

export default BooksTable;
