export const selectQuizes = () => {
  return {
    type: "QUIZES_SELECTED"
  };
};

export const selectQuize = quize => {
  return {
    type: "QUIZ_SELECTED",
    payload: quize
  };
};

export const nextQuiz = () => {
  return {
    type: "NEXT_QUIZ"
  };
};

export const nextStatus = status => {
  return {
    type: "NEXT_STATUS",
    payload: status
  };
};

export const incorrectAnswer = index => {
  return {
    type: "INCORRECT_ANSWER",
    payload: index
  };
};

export const startQuiz = () => {
  return {
    type: "START_QUIZ"
  };
};

export const finishQuiz = () => {
  return {
    type: "FINISH_QUIZ"
  };
};

export const backToHome = () => {
  return {
    type: "BACK_TO_HOME"
  };
};
