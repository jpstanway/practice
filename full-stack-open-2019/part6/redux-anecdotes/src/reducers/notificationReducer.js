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
export const setNotification = message => {
  return {
    type: "SET_NOTIFICATION",
    payload: message
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION"
  };
};

export default notificationReducer;
