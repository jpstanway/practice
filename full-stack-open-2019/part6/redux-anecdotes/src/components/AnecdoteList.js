import React from "react";
import { connect } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const handleVote = anecdote => {
    props.vote(anecdote);
    props.setNotification(`you voted for "${anecdote.content}"`, 5);
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
  { vote, setNotification }
)(AnecdoteList);
