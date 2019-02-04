import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  getQuizList,
  selectCategory,
  selectSubCategory,
  getDocumentWidth,
  getData
} from '../actions';
import history from '../history';
import StudiedTime from './StudiedTime';

class ShowQuizList extends React.Component {
  componentDidMount() {
    axios
      .all([axios.get('/quiz'), axios.get('/cat'), axios.get('/subcat')])
      .then(
        axios.spread((quizRes, catRes, subCatRes) => {
          this.props.getData(quizRes.data, catRes.data, subCatRes.data);
        })
      );

    this.props.getDocumentWidth(document.documentElement.clientWidth);
    const usedCategories = this.props.quizCategories.filter(category => {
      const usedCategoryIds = _.uniq(_.map(this.props.quizList, 'cat'));
      return usedCategoryIds.includes(category._id);
    });
    this.props.getQuizList(usedCategories);
    window.addEventListener('resize', () =>
      this.props.getDocumentWidth(document.documentElement.clientWidth)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.props.getDocumentWidth(document.documentElement.clientWidth)
    );
  }

  handleSelectChange = e => {
    this.props.selectCategory(
      this.props.quizCategories.find(cat => cat._id === e.target.value)
    );
  };

  handleButtonClick = subCat => {
    this.props.selectSubCategory(subCat);
    history.push('/setting');
  };

  handleTitleClick = e => {
    if (!this.props.mobileView) {
      return;
    }
    if (e.target.className === 'title') {
      e.target.className = 'title active';
      e.target.nextSibling.className = 'content active';
      e.target.nextSibling.querySelector('ul').className = 'transition visible';
    } else {
      e.target.className = 'title';
      e.target.nextSibling.className = 'content';
      e.target.nextSibling.querySelector('ul').className = 'transition hidden';
    }
  };

  renderSubCategory = subCat => {
    return (
      <h2
        className={this.props.mobileView ? 'title' : 'header'}
        onClick={this.handleTitleClick}
      >
        {this.props.mobileView && <i className='dropdown icon' />}
        {subCat.name}
      </h2>
    );
  };

  render() {
    return (
      <React.Fragment>
        <StudiedTime />
        <div className='show-quiz-list ui container form'>
          <h1>English speaking training</h1>
          <div className='field'>
            <p>Select category!</p>
            <select
              className='ui dropdown'
              value={this.props.selectedCategory._id}
              onChange={this.handleSelectChange}
            >
              {this.props.quizCategories.map(category => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className={`ui ${
              this.props.mobileView ? ' styled accordion' : 'pc'
            }`}
          >
            {this.props.quizSubCategories.map(subCat => {
              if (subCat.catId === this.props.selectedCategory._id) {
                return (
                  <div
                    key={subCat._id}
                    className={!this.props.mobileView && 'ui card'}
                  >
                    {this.props.mobileView ? (
                      this.renderSubCategory(subCat)
                    ) : (
                      <div className='content'>
                        {this.renderSubCategory(subCat)}
                      </div>
                    )}
                    <div className='content'>
                      <ul
                        className={`transition${this.props.mobileView &&
                          ' hidden'}`}
                      >
                        {this.props.quizList.map(quiz => {
                          if (quiz.subCatId === subCat._id) {
                            return <li key={quiz._id}>{quiz.translation}</li>;
                          }
                          return null;
                        })}
                      </ul>
                      <button
                        className='ui button primary'
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
      </React.Fragment>
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
  {
    getQuizList,
    selectCategory,
    selectSubCategory,
    getDocumentWidth,
    getData
  }
)(ShowQuizList);
