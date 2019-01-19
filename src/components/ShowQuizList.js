import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
  getQuizList,
  selectCategory,
  selectSubCategory,
  getDocumentWidth
} from "../actions";
import history from "../history";

class ShowQuizList extends React.Component {
  componentDidMount() {
    this.props.getDocumentWidth(document.documentElement.clientWidth);
    const usedCategoryIds = _.uniq(_.map(this.props.quizList, "cat"));
    const usedCategories = this.props.quizCategories.filter(category => {
      return usedCategoryIds.includes(category.id);
    });
    this.props.getQuizList(usedCategories);
    window.addEventListener("resize", () =>
      this.props.getDocumentWidth(document.documentElement.clientWidth)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.props.getDocumentWidth(document.documentElement.clientWidth)
    );
  }

  handleSelectChange = e => {
    this.props.selectCategory(this.props.quizCategories[e.target.value]);
  };

  handleButtonClick = subCat => {
    this.props.selectSubCategory(subCat);
    history.push("/setting");
  };

  handleTitleClick = e => {
    if (e.target.className === "title") {
      e.target.className = "title active";
      e.target.nextSibling.className = "content active";
      e.target.nextSibling.querySelector("ul").className = "transition visible";
    } else {
      e.target.className = "title";
      e.target.nextSibling.className = "content";
      e.target.nextSibling.querySelector("ul").className = "transition hidden";
    }
  };

  renderSubCategory = subCat => {
    return (
      <h2
        className={this.props.mobileView ? "title" : "header"}
        onClick={this.handleTitleClick}
      >
        {this.props.mobileView ? <i className="dropdown icon" /> : null}
        {subCat.name}
      </h2>
    );
  };

  render() {
    return (
      <div className="show-quiz-list ui container form">
        <h1>English speaking training</h1>
        <div className="field">
          <p>Select category!</p>
          <select
            className="ui dropdown"
            value={this.props.selectedCategory.id}
            onChange={this.handleSelectChange}
          >
            {this.props.quizCategories.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className={`ui ${this.props.mobileView ? " styled accordion" : "pc"}`}
        >
          {this.props.quizSubCategories.map(subCat => {
            if (subCat.cat === +this.props.selectedCategory.id) {
              return (
                <div
                  key={subCat.id}
                  className={this.props.mobileView ? "" : "ui card"}
                >
                  {this.props.mobileView ? (
                    this.renderSubCategory(subCat)
                  ) : (
                    <div className="content">
                      {this.renderSubCategory(subCat)}
                    </div>
                  )}
                  <div className="content">
                    <ul
                      className={`transition${
                        this.props.mobileView ? " hidden" : ""
                      }`}
                    >
                      {this.props.quizList.map(quiz => {
                        if (quiz.subcat === subCat.id) {
                          return <li key={quiz.id}>{quiz.translation}</li>;
                        }
                        return null;
                      })}
                    </ul>
                    <button
                      className="ui button primary"
                      onClick={() => this.handleButtonClick(subCat)}
                    >
                      Try these!
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizList: state.quizList,
    quizCategories: state.quizCategories,
    quizSubCategories: state.quizSubCategories,
    selectedCategory: state.selectedCategory,
    mobileView: state.mobileView
  };
};

export default connect(
  mapStateToProps,
  { getQuizList, selectCategory, selectSubCategory, getDocumentWidth }
)(ShowQuizList);
