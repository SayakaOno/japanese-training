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

export const startQuiz = formValues => {
  return {
    type: "START_QUIZ",
    payload: formValues
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
