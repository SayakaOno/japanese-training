import React from "react";
import { Router, Route } from "react-router-dom";
import ShowQuiz from "./ShowQuiz";
import Setting from "./Setting";
import Result from "./Result";
import history from "../history";
import ShowQuizList from "./ShowQuizList";

const App = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route path="/" exact component={ShowQuizList} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/quiz" component={ShowQuiz} />
        <Route path="/result" component={Result} />
      </React.Fragment>
    </Router>
  );
};

export default App;
