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

export const getStatus = () => {
  return {
    type: "GET_STATUS"
  };
};
