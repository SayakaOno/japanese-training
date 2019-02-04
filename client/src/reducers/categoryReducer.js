export const selectCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload.cat[0];
    case 'SELECT_CATEGORY':
      return action.payload;
    default:
      return state;
  }
};

export const quizCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload.cat;
    case 'GET_QUIZ_LIST':
      return action.payload;
    default:
      return state;
  }
};

export const quizSubCategoryReducer = (state = [], action) => {
  if (action.type === 'GET_DATA') {
    return action.payload.subCat;
  }
  return state;
};

export const selectedSubCategoryReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_SUBCATEGORY':
      return action.payload;
    default:
      return state;
  }
};
