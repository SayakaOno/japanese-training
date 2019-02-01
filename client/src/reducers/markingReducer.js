export default (state = [], action) => {
  switch (action.type) {
    case "INCORRECT_ANSWER":
      return state.concat(action.payload);
    case "QUIZES_SELECTED":
      return [];
    case "BACK_TO_HOME":
      return [];
    default:
      return state;
  }
};
