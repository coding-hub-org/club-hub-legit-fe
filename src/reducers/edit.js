const editReducer = (state = false, action) => {
  switch (action.type) {
    case "EDIT":
      return !state;
    default:
      return state;
  }
};

export default editReducer;
