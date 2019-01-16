import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ShowQuiz from "./ShowQuiz";
import Setting from "./Setting";
import Result from "./Result";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path="/" exact component={Setting} />
        <Route path="/quiz" component={ShowQuiz} />
        <Route path="/result" component={Result} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
