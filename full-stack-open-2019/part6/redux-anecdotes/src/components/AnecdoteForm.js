import React from "react";
import { connect } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = props => {
  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createNew(content);
    props.createAnecdote(newAnecdote);
    props.setNotification("anecdote created!");

    setTimeout(() => {
      return props.removeNotification();
    }, 5000);
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

export default connect(
  null,
  { createAnecdote, setNotification, removeNotification }
)(AnecdoteForm);
