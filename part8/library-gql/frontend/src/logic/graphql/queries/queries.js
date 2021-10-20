import { gql } from "@apollo/client";

const BOOK_DETAILS = gql`
  fragment BookDetails on Book {
    title
    author {
      name
    }
    published
  }
`;

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
    }
  }
`;

export const ALL_BOOKS = gql`
  query allBooks($author: String, $genre: String) {
    allBooks(author: $author, genre: $genre) {
      ...BookDetails
      genres
    }
  }

  ${BOOK_DETAILS}
`;

export const ADD_BOOK = gql`
  mutation AddBookMutation(
    $title: String!
    $author: String!
    $genres: [String!]!
    $published: Int
  ) {
    addBook(
      title: $title
      author: $author
      genres: $genres
      published: $published
    ) {
      ...BookDetails
    }
  }

  ${BOOK_DETAILS}
`;

export const EDIT_AUTHOR = gql`
  mutation EditAuthorMutation($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born) {
      name
      born
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(userName: $username, password: $password) {
      value
    }
  }
`;

export const USER_RECOMMENDATION = gql`
  query {
    userRecommendations {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}
`;

export const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      ...BookDetails
    }
  }

  ${BOOK_DETAILS}
`;
