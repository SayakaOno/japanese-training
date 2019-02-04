export const countTime = () => {
  return {
    type: 'COUNT_TIME'
  };
};

export const getDocumentWidth = width => {
  return {
    type: 'GET_DOCUMENT_WIDTH',
    payload: width
  };
};

export const getData = (quizzes, cat, subCat) => {
  return {
    type: 'GET_DATA',
    payload: {
      quizzes,
      cat,
      subCat
    }
  };
};

export const getQuizList = categories => {
  return {
    type: 'GET_QUIZ_LIST',
    payload: categories
  };
};

export const selectCategory = category => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  };
};

export const selectSubCategory = subCategory => {
  return {
    type: 'SELECT_SUBCATEGORY',
    payload: subCategory
  };
};

export const nextQuiz = () => {
  return {
    type: 'NEXT_QUIZ'
  };
};

export const nextStatus = status => {
  return {
    type: 'NEXT_STATUS',
    payload: status
  };
};

export const incorrectAnswer = quiz => {
  return {
    type: 'INCORRECT_ANSWER',
    payload: quiz
  };
};

export const startQuiz = formValues => {
  return {
    type: 'START_QUIZ',
    payload: formValues
  };
};

export const finishQuiz = () => {
  return {
    type: 'FINISH_QUIZ'
  };
};

export const backToHome = () => {
  return {
    type: 'BACK_TO_HOME'
  };
};

export const spendingTime = startTime => {
  return {
    type: 'SPENDING_TIME',
    payload: startTime
  };
};
