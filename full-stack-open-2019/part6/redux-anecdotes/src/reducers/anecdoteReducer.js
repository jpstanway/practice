import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      return state.map(anecdote => {
        if (anecdote.id === action.payload.id) {
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
export const vote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.addVote(anecdote);
    dispatch({
      type: "VOTE",
      payload: updatedAnecdote
    });
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      payload: newAnecdote
    });
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      payload: anecdotes
    });
  };
};

export default anecdoteReducer;
