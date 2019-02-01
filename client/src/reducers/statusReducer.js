const ANSWERING = "answering";

const statusReducer = (status = ANSWERING, action) => {
  switch (action.type) {
    case "NEXT_STATUS":
      return action.payload;
    case "START_QUIZ":
      return ANSWERING;
    default:
      return status;
  }
};

export default statusReducer;
