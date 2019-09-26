import React from "react";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes;

  const handleVote = ({ id, content }) => {
    props.store.dispatch(vote(id));
    props.store.dispatch(setNotification(`you voted for "${content}"`));

    setTimeout(() => {
      return props.store.dispatch(removeNotification());
    }, 5000);
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
