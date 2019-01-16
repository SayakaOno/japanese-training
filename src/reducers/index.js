import { combineReducers } from "redux";
import { quizesReducer, currentQuizReducer } from "./quizesReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  quizes: quizesReducer,
  currentQuiz: currentQuizReducer,
  status: statusReducer
});
