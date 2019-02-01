import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuizSchema = new Schema({
  id: {
    type: Number,
    required: 'Enter a id'
  },
  cat: {
    type: Number,
    required: 'Enter a category'
  },
  subcat: {
    type: Number,
    required: 'Enter a sub category'
  },
  level: {
    type: Number,
    required: 'Enter a level'
  },
  answer: {
    type: String,
    required: 'Enter an answer'
  },
  translation: {
    type: String,
    required: 'Enter a translation'
  },
  question: {
    type: String
  }
});
