import { quizes } from "../data";

export const quizesReducer = () => {
  return quizes;
};

export const currentQuizReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXT_QUIZ":
      return state + 1;
    case "FINISH_QUIZ":
      return 0;
    default:
      return state;
  }
};
