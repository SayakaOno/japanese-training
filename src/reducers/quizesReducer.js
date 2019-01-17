import { quizes } from "../data";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const quizesReducer = (state = [], action) => {
  switch (action.type) {
    case "START_QUIZ":
      let filteredQuiz = quizes.slice();
      if (action.payload.order === "random") {
        filteredQuiz = shuffle(filteredQuiz);
      }
      if (action.payload.numberOfQuestions) {
        filteredQuiz.length = +action.payload.numberOfQuestions;
      }
      return filteredQuiz;
    default:
      return state;
  }
};

export const quizeSettingReducer = (state = {}, action) => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...action.payload,
        duration:
          action.payload.duration || action.payload.duration !== "select"
            ? +action.payload.duration.slice(0, -4)
            : null
      };
    default:
      return state;
  }
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
