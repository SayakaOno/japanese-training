import { quizzes, categories, subCategories } from "../data";

export const selectCategoryReducer = (state = 1, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export const quizCategoryReducer = (state = categories, action) => {
  switch (action.type) {
    case "GET_QUIZ_LIST":
      return action.payload;
    default:
      return state;
  }
};

export const quizSubCategoryReducer = () => {
  return subCategories;
};

export const selectedSubCategoryReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_SUBCATEGORY":
      return action.payload;
    default:
      return state;
  }
};
