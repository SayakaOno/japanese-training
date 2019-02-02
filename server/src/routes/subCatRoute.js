import {
  addNewSubCat,
  getSubCats,
  getSubCat,
  updateSubCat,
  deleteSubCat
} from '../controllers/subCatController';

const routes = app => {
  app
    .route('/subcat')
    .post(addNewSubCat)
    .get(getSubCats);

  app
    .route('/subcat/:subCatId')
    .get(getSubCat)
    .put(updateSubCat)
    .delete(deleteSubCat);
};

export default routes;
