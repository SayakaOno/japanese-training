import { combineReducers } from "redux";
import { quizesReducer, currentQuizReducer } from "./quizesReducer";
import statusReducer from "./statusReducer";
import markingReducer from "./markingReducer";

export default combineReducers({
  quizes: quizesReducer,
  currentQuiz: currentQuizReducer,
  status: statusReducer,
  incorrectAnswers: markingReducer
});
