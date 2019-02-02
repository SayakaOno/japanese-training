import mongoose from 'mongoose';
import { catSchema } from '../models/catModel';

const Category = mongoose.model('Category', catSchema);

export const addNewCat = (req, res) => {
  let newCat = new Category(req.body);

  newCat.save((err, cat) => {
    if (err) {
      res.send(err);
    }
    res.json(cat);
  });
};

export const getCats = (req, res) => {
  Category.find({}, (err, cats) => {
    if (err) {
      res.send(err);
    }
    res.json(cats);
  });
};

export const getCat = (req, res) => {
  Category.findById(req.params.catId, (err, cat) => {
    if (err) {
      res.send(err);
    }
    res.json(cat);
  });
};

export const updateCat = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.params.catId },
    req.body,
    { new: true },
    (err, cat) => {
      if (err) {
        res.send(err);
      }
      res.json(cat);
    }
  );
};

export const deleteCat = (req, res) => {
  Category.deleteOne({ _id: req.params.catId }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Category is successfully deleted' });
  });
};
