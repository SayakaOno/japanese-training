import catRoute from './catRoute';
import quizRoute from './quizRoute';
import subCatRoute from './subCatRoute';

export default app => {
  [catRoute, quizRoute, subCatRoute].forEach(route => {
    route(app);
  });
};
