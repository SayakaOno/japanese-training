import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuizSchema = new Schema({
  catId: {
    type: String,
    required: 'Enter a category Id'
  },
  subCatId: {
    type: String,
    required: 'Enter a sub category Id'
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
