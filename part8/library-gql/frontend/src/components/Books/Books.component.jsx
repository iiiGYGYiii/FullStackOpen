/* eslint-disable indent */
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_BOOKS } from "../../logic/graphql/queries/queries";
import { allGenresFromBooks } from "../../utils/books.utils";

import "./Books.styles.css";

import { BooksTable } from "..";

export default function Books() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  const { data, loading } = useQuery(ALL_BOOKS, {
    variables: {
      genre: selectedGenre === "ALL" ? null : selectedGenre,
    },
    pollInterval: 10e3,
  });
  if (loading) return <p>Loading...</p>;
  if (!genres.length && data) setGenres(allGenresFromBooks(data.allBooks));
  const handleChange = ({ target }) => {
    setSelectedGenre(target.value);
    if (target.value === "ALL") setSelectedGenre(null);
  };
  return (
    <div>
      <label>
        <select
          value={selectedGenre === null ? "ALL" : selectedGenre}
          onChange={handleChange}
        >
          {genres.map((genre) => (
            <option value={genre} key={genre}>
              {`${genre[0].toUpperCase()}${genre.substr(1)}`}
            </option>
          ))}
        </select>
      </label>
      <BooksTable books={data.allBooks} />
    </div>
  );
}
