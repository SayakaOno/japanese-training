import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const catSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a name'
  }
});
