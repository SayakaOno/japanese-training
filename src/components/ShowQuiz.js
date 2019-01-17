import React from "react";
import { connect } from "react-redux";
import history from "../history";
import {
  selectQuizes,
  nextQuiz,
  nextStatus,
  incorrectAnswer,
  finishQuiz
} from "../actions";

const ANSWERING = "answering";
const SHOWING_ANSWER = "showing_answer";
const FINISHED = "finished";

class ShowQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.card = React.createRef();
  }

  componentDidMount() {
    this.card.current.focus();
  }

  mark = () => {
    if (this.props.currentQuiz === this.props.quizes.length - 1) {
      this.props.nextStatus(FINISHED);
      this.props.finishQuiz();
      history.push("/result");
    } else {
      this.props.nextStatus(ANSWERING);
      this.props.nextQuiz();
    }
  };

  addIncorrectAnswer = () => {
    this.props.incorrectAnswer(this.props.quizes[this.props.currentQuiz].id);
  };

  handleIncorrectAnswer = () => {
    this.addIncorrectAnswer();
    this.mark();
  };

  handleKeydown = e => {
    if (this.props.currentStatus === ANSWERING && e.key === "Enter") {
      this.props.nextStatus(SHOWING_ANSWER);
    } else if (this.props.currentStatus === SHOWING_ANSWER) {
      if (e.key === "ArrowLeft") {
        this.handleIncorrectAnswer();
      } else if (e.key === "ArrowRight") {
        this.mark();
      }
    }
  };

  renderNavigation = () => {
    if (this.props.currentStatus === ANSWERING) {
      return (
        <div className="show-answer">
          <button
            className="button ui primary"
            onClick={() => this.props.nextStatus(SHOWING_ANSWER)}
          >
            Show Answer
          </button>
          <p className="description">or press "Enter" to show answer!</p>
        </div>
      );
    } else if (this.props.currentStatus === SHOWING_ANSWER) {
      return (
        <div className="mark-answer">
          <button
            className="button ui red"
            onClick={this.handleIncorrectAnswer}
          >
            <i className="times icon" />
          </button>
          <button className="button ui primary" onClick={this.mark}>
            <i className="dot circle icon" />
          </button>
          <p className="description">
            <i className="caret left icon" />
            or press arrow key!
            <i className="caret right icon" />
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <div
        ref={this.card}
        className="ui cards"
        onKeyDown={this.handleKeydown}
        tabIndex="0"
      >
        <div className="card">
          <div className="count">
            {this.props.currentQuiz + 1}/{this.props.quizes.length}
          </div>
          <div className="content">
            <div className="question">
              <div className="description">Translate this!</div>
              <div className="ui huge header">
                {this.props.quizes[this.props.currentQuiz].translation}
              </div>
            </div>
            <div className="answer">
              {this.props.currentStatus === SHOWING_ANSWER ? (
                <React.Fragment>
                  <div className="description">Answer:</div>
                  <div className="ui huge header">
                    {this.props.quizes[this.props.currentQuiz].answer}
                  </div>
                </React.Fragment>
              ) : null}
            </div>
            {this.renderNavigation()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.quizes,
    currentQuiz: state.currentQuiz,
    currentStatus: state.status,
    incorrectAnswers: state.incorrectAnswers
  };
};

export default connect(
  mapStateToProps,
  { selectQuizes, nextStatus, nextQuiz, incorrectAnswer, finishQuiz }
)(ShowQuiz);
