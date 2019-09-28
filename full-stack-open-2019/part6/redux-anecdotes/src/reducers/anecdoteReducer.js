const reducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      return state.map(anecdote => {
        if (anecdote.id === action.payload) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1
          };
        }
        return anecdote;
      });
    case "NEW_ANECDOTE":
      return [...state, action.payload];
    case "INIT_ANECDOTES":
      return action.payload;
    default:
      return state;
  }
};

// action creators
export const vote = id => {
  return {
    type: "VOTE",
    payload: id
  };
};

export const createAnecdote = content => {
  return {
    type: "NEW_ANECDOTE",
    payload: content
  };
};

export const initializeAnecdotes = anecdotes => {
  return {
    type: "INIT_ANECDOTES",
    payload: anecdotes
  };
};

export default reducer;
