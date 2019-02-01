import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/quizRoute';
import { mongoDBAddress } from './config';

const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBAddress, { useNewUrlParser: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`your server is running on PORT ${PORT}`);
});
