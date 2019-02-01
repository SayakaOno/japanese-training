import catRoute from './catRoute';
import quizRoute from './quizRoute';

export default app => {
  [catRoute, quizRoute].forEach(route => {
    route(app);
  });
};
