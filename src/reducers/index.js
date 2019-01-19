import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  quizzesReducer,
  currentQuizReducer,
  quizeSettingReducer,
  quizListReducer
} from "./quizzesReducer";
import { startTimeReducer, spendingTimeReducer } from "./timeReducers";
import statusReducer from "./statusReducer";
import markingReducer from "./markingReducer";
import {
  selectCategoryReducer,
  quizCategoryReducer,
  quizSubCategoryReducer,
  selectedSubCategoryReducer
} from "./categoryReducer";
import widthReducer from "./widthReducer";

export default combineReducers({
  quizzes: quizzesReducer,
  currentQuiz: currentQuizReducer,
  status: statusReducer,
  incorrectQuizzes: markingReducer,
  form: formReducer,
  setting: quizeSettingReducer,
  startTime: startTimeReducer,
  spentTime: spendingTimeReducer,
  quizList: quizListReducer,
  quizCategories: quizCategoryReducer,
  quizSubCategories: quizSubCategoryReducer,
  selectedCategory: selectCategoryReducer,
  selectedSubCategory: selectedSubCategoryReducer,
  mobileView: widthReducer
});
