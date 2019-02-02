import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SubCatSchema = new Schema({
  catId: {
    type: String,
    required: 'Enter a catId'
  },
  name: {
    type: String,
    required: 'Enter a sub category'
  }
});
