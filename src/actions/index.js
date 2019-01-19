export const getQuizList = categories => {
  return {
    type: "GET_QUIZ_LIST",
    payload: categories
  };
};

export const selectCategory = categoryId => {
  return {
    type: "SELECT_CATEGORY",
    payload: categoryId
  };
};

export const selectSubCategory = subCategoryId => {
  return {
    type: "SELECT_SUBCATEGORY",
    payload: subCategoryId
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

export const incorrectAnswer = quiz => {
  return {
    type: "INCORRECT_ANSWER",
    payload: quiz
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

export const spendingTime = startTime => {
  return {
    type: "SPENDING_TIME",
    payload: startTime
  };
};
