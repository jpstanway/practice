const initialState = {
  message: "render here notification...",
  display: "none"
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.payload,
        display: "block"
      };
    case "REMOVE_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

// action creators
export const setNotification = (message, time) => {
  return async dispatch => {
    await dispatch({
      type: "SET_NOTIFICATION",
      payload: message
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION"
      });
    }, time * 1000);
  };
};

export default notificationReducer;
