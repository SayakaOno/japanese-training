import {
  addNewCat,
  getCats,
  getCat,
  updateCat,
  deleteCat
} from '../controllers/catContoroller';

const routes = app => {
  app
    .route('/cat')
    .post(addNewCat)
    .get(getCats);

  app
    .route('/cat/:catId')
    .get(getCat)
    .put(updateCat)
    .delete(deleteCat);
};

export default routes;
