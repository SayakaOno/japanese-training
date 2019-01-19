import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  quizesReducer,
  currentQuizReducer,
  quizeSettingReducer,
  quizListReducer,
  quizCategoryReducer,
  quizSubCategoryReducer
} from "./quizesReducer";
import { startTimeReducer, spendingTimeReducer } from "./timeReducers";
import statusReducer from "./statusReducer";
import markingReducer from "./markingReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  quizes: quizesReducer,
  currentQuiz: currentQuizReducer,
  status: statusReducer,
  incorrectQuizes: markingReducer,
  form: formReducer,
  setting: quizeSettingReducer,
  startTime: startTimeReducer,
  spentTime: spendingTimeReducer,
  quizList: quizListReducer,
  quizCategories: quizCategoryReducer,
  quizSubCategories: quizSubCategoryReducer,
  selectedCategory: categoryReducer
});
