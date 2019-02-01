import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import ShowQuiz from "./ShowQuiz";
import Setting from "./Setting";
import Result from "./Result";
import history from "../history";
import ShowQuizList from "./ShowQuizList";
import { countTime } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(this.props.countTime, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
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
  }
}

export default connect(
  null,
  { countTime }
)(App);
