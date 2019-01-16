import { quizes } from "../data";

export const quizesReducer = () => {
  return quizes;
};

export const currentQuizReducer = (state = 0, action) => {
  if (!action) {
    return;
  }
  if (action.type === "NEXT_QUIZ") {
    return state + 1;
  }
  return state;
};
