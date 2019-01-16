export default (state = [], action) => {
  if (action.type === "INCORRECT_ANSWER") {
    return state.concat(action.payload);
  }
  return state;
};
