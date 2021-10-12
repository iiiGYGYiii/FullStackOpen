function searchByAuthor(list, author) {
  return list.filter((item) => item.author === author);
}

function searchByGenre(list, genre) {
  return list.filter((item) => item.genres.includes(genre));
}

function searchByAuthorAndGenre(list, author, genre) {
  return searchByAuthor(searchByGenre(list, genre), author);
}

module.exports = {
  searchByAuthorAndGenre,
  searchByAuthor,
  searchByGenre,
};
