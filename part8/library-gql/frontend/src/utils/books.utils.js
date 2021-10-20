export const allGenresFromBooks = (books) => {
  let totalGenres = ["ALL"];
  for (let book of books) {
    const { genres } = book;
    genres.forEach((genre) => {
      if (!totalGenres.includes(genre)) {
        totalGenres = [...totalGenres, genre];
      }
    });
  }
  return totalGenres;
};

export const filterBooksByGenre = (books, genre) => {
  return books.filter((book) => book.genres.includes(genre));
};
