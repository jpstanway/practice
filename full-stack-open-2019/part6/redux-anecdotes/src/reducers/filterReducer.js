const initialState = {
  content: ""
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        content: action.payload
      };
    default:
      return state;
  }
};

export const filterContent = content => {
  return {
    type: "FILTER",
    payload: content
  };
};

export default filterReducer;
