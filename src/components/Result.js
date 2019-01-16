import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  render() {
    const { quizes, incorrectAnswers } = this.props;
    return (
      <div className="result">
        <div className="container">
          <h1 className="ui huge header">Well done!</h1>
          <p className="description">
            Here is the sentences that you might want to review:
          </p>
          <ul>
            {incorrectAnswers.map(index => (
              <li key={quizes[index].id}>
                <p className="en">{quizes[index].answer}</p>
                <p className="ja">( {quizes[index].translation} )</p>
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
