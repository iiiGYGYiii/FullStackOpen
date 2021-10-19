import { gql } from "@apollo/client";

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
  query {
    allBooks {
      title
      author {
        name
      }
      published
    }
  }
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
      title
      author {
        name
      }
      published
    }
  }
`;

export const EDIT_AUTHOR = gql`
  mutation EditAuthorMutation($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born) {
      name
      born
    }
  }
`;
