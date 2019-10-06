import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
    }
  }
`;

const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
    }
  }
`;

const NEW_BOOK = gql`
  mutation newBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      author
      published
    }
  }
`;

const App = () => {
  const [page, setPage] = useState("authors");

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>
      <Query query={ALL_AUTHORS}>
        {result => <Authors show={page === "authors"} result={result} />}
      </Query>
      <Query query={ALL_BOOKS}>
        {result => <Books show={page === "books"} result={result} />}
      </Query>
      <Mutation
        mutation={NEW_BOOK}
        refetchQueries={[{ query: ALL_AUTHORS }, { query: ALL_BOOKS }]}
      >
        {addBook => <NewBook show={page === "add"} addBook={addBook} />}
      </Mutation>
    </div>
  );
};

export default App;
