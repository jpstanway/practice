import React, { useState, useEffect } from "react";
import { Query, Mutation } from "react-apollo";
import {
  useApolloClient,
  useQuery,
  useSubscription
} from "@apollo/react-hooks";

import { ALL_AUTHORS, ALL_BOOKS, CURRENT_USER } from "./graphql/queries";
import { NEW_BOOK, LOGIN } from "./graphql/mutations";
import { BOOK_ADDED } from "./graphql/subscriptions";

import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import Recommendations from "./components/Recommendations";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);
  let currentUser = useQuery(CURRENT_USER);

  useEffect(() => {
    const token = localStorage.getItem("booksapp-user-token");
    if (token) {
      setToken(token);
    }
  }, []);

  useSubscription(BOOK_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      window.alert("New book added!", subscriptionData);
    }
  });

  const client = useApolloClient();

  const renderUserActions = () => {
    if (!token) {
      return <button onClick={() => setPage("login")}>login</button>;
    }

    return (
      <span>
        <button onClick={() => setPage("add")}>add book</button>
        <button onClick={() => setPage("recommendations")}>
          recommendations
        </button>
        <button onClick={logout}>logout</button>
      </span>
    );
  };

  const logout = () => {
    setToken(null);
    currentUser = null;
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
      <Query
        query={ALL_BOOKS}
        variables={{
          genre:
            !currentUser.data.me || currentUser.loading
              ? ""
              : currentUser.data.me.favoriteGenre
        }}
      >
        {result => (
          <Recommendations
            show={page === "recommendations"}
            result={result}
            currentUser={currentUser}
          />
        )}
      </Query>
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
