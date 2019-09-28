import React from "react";
import { connect } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const handleVote = ({ id, content }) => {
    props.vote(id);
    props.setNotification(`you voted for "${content}"`);

    setTimeout(() => {
      return props.removeNotification();
    }, 5000);
  };

  return (
    <div>
      {props.visibleAnecdotes
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  const filterContent = filter.content;

  if (!filterContent) {
    return anecdotes;
  }

  return anecdotes.filter(anecdote => anecdote.content.includes(filterContent));
};

const mapStateToProps = state => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  };
};

export default connect(
  mapStateToProps,
  { vote, setNotification, removeNotification }
)(AnecdoteList);
