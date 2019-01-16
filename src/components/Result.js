import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  render() {
    const { quizes, incorrectAnswers } = this.props;
    return (
      <div className="result">
        <div className="container">
          <h1 className="ui huge header">Well done!</h1>
          <p>Here is the sentences that you might want to review:</p>
          <ul>
            {incorrectAnswers.map(index => (
              <li key={quizes[index].id}>
                <span className="en">{quizes[index].answer}</span>
                <br />
                <span className="ja">( {quizes[index].translation} )</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { incorrectAnswers: state.incorrectAnswers, quizes: state.quizes };
};

export default connect(mapStateToProps)(Result);
