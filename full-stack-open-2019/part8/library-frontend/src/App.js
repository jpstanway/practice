import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import { useApolloClient } from "@apollo/react-hooks";

import { ALL_AUTHORS, ALL_BOOKS } from "./graphql/queries";
import { NEW_BOOK, LOGIN } from "./graphql/mutations";

import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);

  const client = useApolloClient();

  const renderUserActions = () => {
    if (!token) {
      return <button onClick={() => setPage("login")}>login</button>;
    }

    return (
      <span>
        <button onClick={() => setPage("add")}>add book</button>
        <button onClick={logout}>logout</button>
      </span>
    );
  };

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        {renderUserActions()}
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
      <Mutation mutation={LOGIN}>
        {login => (
          <LoginForm
            show={page === "login"}
            login={login}
            setToken={token => setToken(token)}
          />
        )}
      </Mutation>
    </div>
  );
};

export default App;
