import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  quizesReducer,
  currentQuizReducer,
  quizeSettingReducer
} from "./quizesReducer";
import { startTimeReducer, spendingTimeReducer } from "./timeReducers";
import statusReducer from "./statusReducer";
import markingReducer from "./markingReducer";

export default combineReducers({
  quizes: quizesReducer,
  currentQuiz: currentQuizReducer,
  status: statusReducer,
  incorrectQuizes: markingReducer,
  form: formReducer,
  setting: quizeSettingReducer,
  startTime: startTimeReducer,
  spentTime: spendingTimeReducer
});
