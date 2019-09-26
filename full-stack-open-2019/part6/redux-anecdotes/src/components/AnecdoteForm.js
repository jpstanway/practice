import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";

const AnecdoteForm = props => {
  const addAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    props.store.dispatch(createAnecdote(content));
    props.store.dispatch(setNotification("anecdote created!"));

    setTimeout(() => {
      return props.store.dispatch(removeNotification());
    }, 5000);

    event.target.anecdote.value = "";
  };

  return (
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
