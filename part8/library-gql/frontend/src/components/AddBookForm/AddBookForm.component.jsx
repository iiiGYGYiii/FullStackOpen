import { useState } from "react";
import { useMutation } from "@apollo/client";
import Field from "../Field/Field.component";
import {
  ADD_BOOK,
  ALL_AUTHORS,
  ALL_BOOKS,
} from "../../logic/graphql/queries/queries";

import "./AddBookForm.styles.css";

const initialBookFormState = {
  title: "",
  author: "",
  published: "",
  genre: "",
};

export default function AddBookForm({ setError }) {
  const [createBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
    onError: (error) => setError(error.graphQLErrors[0].message),
  });
  const [bookForm, setBookForm] = useState(initialBookFormState);
  const [genres, setGenres] = useState([]);
  const addGenre = (e) => {
    e.preventDefault();
    setGenres((prevState) => [...prevState, bookForm.genre]);
    setBookForm((prevState) => ({ ...prevState, genre: "" }));
  };
  const handleChange = ({ target }) =>
    setBookForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({
      variables: {
        ...bookForm,
        published: parseInt(bookForm.published),
        genres,
      },
    });
    setBookForm(initialBookFormState);
    setGenres([]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" value={bookForm.title} handleChange={handleChange} />
      <Field
        name="author"
        value={bookForm.author}
        handleChange={handleChange}
      />
      <Field
        name="published"
        type="number"
        value={bookForm.published}
        handleChange={handleChange}
      />
      <label>
        Genre:
        <input name="genre" value={bookForm.genre} onChange={handleChange} />
        <button onClick={addGenre}>ADD GENRE</button>
      </label>
      {genres.length ? <div>Genres: {genres.join(", ")}</div> : null}
      <input type="submit" value="CREATE BOOK" />
    </form>
  );
}
