const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { errors } = require('celebrate');

const helmet = require('helmet');

const rateLimit = require('express-rate-limit');
const errorHandler = require('./errors/errorHandler');
const { validateSignIn, validateSignUp } = require('./celebrateSchemas');

const NotFoundError = require('./errors/not-found-err');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const router = require('./routes/index');

const { requestLogger, errorLogger } = require('./middlewares/Logger');

const { createUser, login } = require('./controllers/users');

const auth = require('./middlewares/auth');

require('dotenv').config();

const { NODE_ENV = 'development' } = process.env;
console.log(NODE_ENV);

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/newsExplorerdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,

});
console.log(process.env.MONGO_URI);

app.use(requestLogger);
app.use(helmet());
app.use(limiter);

// log in
app.post('/signin', validateSignIn, login);

// create user
app.post('/signup', validateSignUp, createUser);

app.use(auth);

app.use(router);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

module.exports = app;