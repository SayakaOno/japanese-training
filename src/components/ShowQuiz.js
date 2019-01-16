import React from "react";
import { connect } from "react-redux";
import { selectQuizes, nextQuiz, nextStatus } from "../actions";

const ANSWERING = "answering";
const SHOWING_ANSWER = "showing_answer";
const MARKING = "marking";
const FINISHED = "finished";

class ShowQuiz extends React.Component {
  handleKeydown = e => {
    if (this.props.currentStatus === ANSWERING) {
      this.props.nextStatus(SHOWING_ANSWER);
    } else if (this.props.currentStatus === SHOWING_ANSWER) {
      this.props.nextStatus(MARKING);
    } else if (this.props.currentStatus === MARKING) {
      if (e.key === "ArrowLeft") {
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
      }
      if (this.props.nextQuiz === this.props.quizes.length) {
        this.props.nextStatus(FINISHED);
      } else {
        this.props.nextStatus(ANSWERING);
        this.props.nextQuiz();
      }
    }
  };

  render() {
    return (
      <div className="ui cards" onKeyDown={this.handleKeydown} tabIndex="0">
        <div className="card">
          <div className="content">
            <div className="question">
              <div className="description">Translate this!</div>
              <div className="ui huge header">
                {this.props.quizes[this.props.currentQuiz].translation}
              </div>
            </div>
            <div className="answer">
              {this.props.currentStatus === SHOWING_ANSWER ||
              this.props.currentStatus === MARKING ? (
                <React.Fragment>
                  <div className="description">Answer:</div>
                  <div className="ui huge header">
                    {this.props.quizes[this.props.currentQuiz].answer}
                  </div>
                </React.Fragment>
              ) : null}
            </div>
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
    currentStatus: state.status
  };
};

export default connect(
  mapStateToProps,
  { selectQuizes, nextStatus, nextQuiz }
)(ShowQuiz);
