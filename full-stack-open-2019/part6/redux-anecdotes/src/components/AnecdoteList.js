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

  const renderAnecdotes = () => {
    const filterContent = props.store.getState().filter.content;

    if (!filterContent) {
      return anecdotes;
    }

    return anecdotes.filter(anecdote =>
      anecdote.content.includes(filterContent)
    );
  };

  return (
    <div>
      {renderAnecdotes()
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
