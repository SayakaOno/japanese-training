const statusReducer = (status = "answering", action) => {
  switch (action.type) {
    case "NEXT_STATUS":
      return action.payload;
    default:
      return status;
  }
};

export default statusReducer;
