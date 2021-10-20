let authors = [
  {
    name: "Robert Martin",
    id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
    born: 1952,
  },
  {
    name: "Martin Fowler",
    id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
    born: 1963,
  },
  {
    name: "Fyodor Dostoevsky",
    id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
    born: 1821,
  },
  {
    name: "Joshua Kerievsky", // birthyear not known
    id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
  },
  {
    name: "Sandi Metz", // birthyear not known
    id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
  },
];

function appendToAuthors(itemToAdd) {
  authors = authors.concat(itemToAdd);
}

function findAuthorByNameAndUpdate(nameToFind, updatedAuthor) {
  authors = authors.map((author) =>
    author.name === nameToFind ? updatedAuthor : author
  );
}

function getAuthors() {
  return authors;
}

module.exports = {
  appendToAuthors,
  findAuthorByNameAndUpdate,
  getAuthors,
};
