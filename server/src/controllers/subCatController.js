import mongoose from 'mongoose';
import { SubCatSchema } from '../models/subCatModel';

const SubCat = mongoose.model('Subcat', SubCatSchema);

export const addNewSubCat = (req, res) => {
  let newSubCat = SubCat(req.body);

  newSubCat.save((err, subcat) => {
    if (err) {
      res.send(err);
    }
    res.json(subcat);
  });
};

export const getSubCats = (req, res) => {
  SubCat.find({}, (err, subcat) => {
    if (err) {
      res.send(err);
    }
    res.json(subcat);
  });
};

export const getSubCat = (req, res) => {
  console.log('GET SUB CAT');
  SubCat.findById(req.params.subCatId, (err, subcat) => {
    if (err) {
      res.send(err);
    }
    res.json(subcat);
  });
};

export const updateSubCat = (req, res) => {
  console.log('UPDATE');
  SubCat.findOneAndUpdate(
    { _id: req.params.subCatId },
    req.body,
    { new: true },
    (err, subcat) => {
      if (err) {
        res.send(err);
      }
      res.json(subcat);
    }
  );
};

export const deleteSubCat = (req, res) => {
  SubCat.deleteOne({ _id: req.params.subCatId }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Subcat is successfully deleted' });
  });
};
