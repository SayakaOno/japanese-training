import {
  addNewQuiz,
  getQuizzes,
  getQuizWithId,
  updateQuiz,
  deleteQuiz
} from '../controllers/quizController';

const routes = app => {
  app
    .route('/quiz')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request from: ${req.method}`);
      next();
    }, getQuizzes)

    // POST endpoint
    .post(addNewQuiz);

  app
    .route('/quiz/:quizId')
    // get specific quiz
    .get(getQuizWithId)

    // put request
    .put(updateQuiz)

    // delete request
    .delete(deleteQuiz);
};

export default routes;
