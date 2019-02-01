export default (state = null, action) => {
  switch (action.type) {
    case "GET_DOCUMENT_WIDTH":
      return action.payload < 576;
    default:
      return state;
  }
};
