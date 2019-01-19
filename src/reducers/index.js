import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  quizesReducer,
  currentQuizReducer,
  quizeSettingReducer,
  quizListReducer
} from "./quizesReducer";
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
  selectedCategoryId: selectCategoryReducer,
  selectedSubCategoryId: selectedSubCategoryReducer,
  mobileView: widthReducer
});
