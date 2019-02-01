export const startTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXT_QUIZ":
    case "START_QUIZ":
      return new Date();
    default:
      return state;
  }
};

export const spendingTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXT_QUIZ":
    case "FINISH_QUIZ":
      return 0;
    case "SPENDING_TIME":
      return new Date() - action.payload;
    default:
      return state;
  }
};

export const studiedTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case "COUNT_TIME":
      return state + 1;
    default:
      return state;
  }
};
