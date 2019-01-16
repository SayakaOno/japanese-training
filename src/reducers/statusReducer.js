const statusReducer = (status = "answering", action) => {
  switch (action.type) {
    case "NEXT_STATUS":
      return action.payload;
    case "GET_STATUS":
      return status;
    default:
      return status;
  }
};

export default statusReducer;
