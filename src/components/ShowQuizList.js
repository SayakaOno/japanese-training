import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getQuizList, selectCategory } from "../actions";

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

  render() {
    return (
      <div className="show-quiz-list">
        <h1>English speaking training</h1>
        <select
          value={this.props.selectedCategory}
          onChange={this.handleSelectChange}
        >
          <option value="select">select</option>
          {this.props.quizCategories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizList: state.quizList,
    quizCategories: state.quizCategories,
    quizSubCategories: state.quizSubCategories,
    selectedCategoryId: state.selectedCategory
  };
};

export default connect(
  mapStateToProps,
  { getQuizList, selectCategory }
)(ShowQuizList);
