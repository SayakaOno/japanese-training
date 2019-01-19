import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getQuizList, selectCategory, selectSubCategory } from "../actions";
import history from "../history";

class ShowQuizList extends React.Component {
  componentDidMount() {
    const usedCategoryIds = _.uniq(_.map(this.props.quizList, "cat"));
    const usedCategories = this.props.quizCategories.filter(category => {
      return usedCategoryIds.includes(category.id);
    });
    this.props.getQuizList(usedCategories);
  }

  handleSelectChange = e => {
    this.props.selectCategory(e.target.value);
  };

  handleButtonClick = subCatId => {
    this.props.selectSubCategory(subCatId);
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

  render() {
    return (
      <div className="show-quiz-list">
        <h1>English speaking training</h1>
        <select
          value={this.props.selectedCategory}
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
        <div className="ui styled accordion">
          {this.props.quizSubCategories.map(subCat => {
            if (subCat.cat === +this.props.selectedCategoryId) {
              return (
                <React.Fragment key={subCat.id}>
                  <div className="title" onClick={this.handleTitleClick}>
                    <i className="dropdown icon" />
                    {subCat.name}
                  </div>
                  <div className="content">
                    <ul className="transition hidden">
                      {this.props.quizList.map(quiz => {
                        if (quiz.subcat === subCat.id) {
                          return <li key={quiz.id}>{quiz.translation}</li>;
                        }
                        return null;
                      })}
                    </ul>
                    <button
                      className="ui button primary"
                      onClick={() => this.handleButtonClick(subCat.id)}
                    >
                      Try these quizzes!
                    </button>
                  </div>
                </React.Fragment>
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
    selectedCategoryId: state.selectedCategoryId
  };
};

export default connect(
  mapStateToProps,
  { getQuizList, selectCategory, selectSubCategory }
)(ShowQuizList);
