import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes';
import { mongoDBAddress } from './config';

const app = express();
const PORT = process.env.PORT || 5000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBAddress, { useNewUrlParser: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`your server is running on PORT ${PORT}`);
});
