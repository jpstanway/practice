import { gql } from "apollo-boost";

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
  query getAllBooks($author: String, $genre: String) {
    allBooks(author: $author, genre: $genre) {
      id
      title
      published
      genres
      author {
        name
      }
    }
  }
`;

export const CURRENT_USER = gql`
  query {
    me {
      id
      username
      favoriteGenre
    }
  }
`;
