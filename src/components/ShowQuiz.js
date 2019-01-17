import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import history from "../history";
import {
  nextQuiz,
  nextStatus,
  incorrectAnswer,
  finishQuiz,
  spendingTime
} from "../actions";

const ANSWERING = "answering";
const SHOWING_ANSWER = "showing_answer";
const FINISHED = "finished";

class ShowQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.card = React.createRef();
    this.bar = React.createRef();
    this.timerId = null;
  }

  componentDidMount() {
    if (this.card.current) {
      this.card.current.focus();
    }
    if (this.props.duration) {
      this.timerId = setInterval(
        () => this.props.spendingTime(this.props.startTime),
        10
      );
    }
  }

  componentDidUpdate() {
    if (this.props.currentStatus === ANSWERING && this.props.duration) {
      if (this.props.duration * 1000 - this.props.spentTime < 0) {
        this.props.nextStatus(SHOWING_ANSWER);
        clearInterval(this.timerId);
      }
      const spentTimePercentage =
        this.props.spentTime / (this.props.duration * 1000);
      this.bar.current.style.width =
        Math.round((1 - spentTimePercentage) * 100) + "%";
    }
  }

  showAnswer = () => {
    this.props.nextStatus(SHOWING_ANSWER);
    clearInterval(this.timerId);
  };

  mark = () => {
    if (this.props.currentQuiz === this.props.quizes.length - 1) {
      this.props.nextStatus(FINISHED);
      this.props.finishQuiz();
      history.push("/result");
    } else {
      this.props.nextStatus(ANSWERING);
      this.props.nextQuiz();
      if (this.props.duration) {
        this.timerId = setInterval(
          () => this.props.spendingTime(this.props.startTime),
          10
        );
      }
    }
  };

  addIncorrectQuize = () => {
    this.props.incorrectAnswer(this.props.quizes[this.props.currentQuiz]);
  };

  handleIncorrectAnswer = () => {
    this.addIncorrectQuize();
    this.mark();
  };

  handleKeydown = e => {
    if (this.props.currentStatus === ANSWERING && e.key === "Enter") {
      this.showAnswer();
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
          <button className="button ui primary" onClick={this.showAnswer}>
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
    return this.props.quizes.length > 0 ? (
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
            {this.props.duration ? (
              <div className="ui yellow progress">
                <div className="bar" ref={this.bar} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ) : (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    quizes: state.quizes,
    currentQuiz: state.currentQuiz,
    currentStatus: state.status,
    incorrectQuizes: state.incorrectQuizes,
    startTime: state.startTime,
    spentTime: state.spentTime,
    duration: state.setting.duration
  };
};

export default connect(
  mapStateToProps,
  { nextStatus, nextQuiz, incorrectAnswer, finishQuiz, spendingTime }
)(ShowQuiz);
