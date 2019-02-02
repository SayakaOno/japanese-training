import mongoose from 'mongoose';
import { QuizSchema } from '../models/quizModel';

const Quiz = mongoose.model('Quiz', QuizSchema);

export const addNewQuiz = (req, res) => {
  let newQuiz = new Quiz(req.body);

  newQuiz.save((err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json(quiz);
  });
};

export const getQuizzes = (req, res) => {
  Quiz.find({}, (err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json(quiz);
  });
};

export const getQuizWithId = (req, res) => {
  Quiz.findById(req.params.quizId, (err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json(quiz);
  });
};

export const updateQuiz = (req, res) => {
  Quiz.findOneAndUpdate(
    { _id: req.params.quizId },
    req.body,
    { new: true },
    (err, quiz) => {
      if (err) {
        res.send(err);
      }
      res.json(quiz);
    }
  );
};

export const deleteQuiz = (req, res) => {
  Quiz.deleteOne({ _id: req.params.quizId }, (err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted quiz' });
  });
};
