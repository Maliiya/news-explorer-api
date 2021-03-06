const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');
const СastError = require('../errors/cast-err');
const ValidationError = require('../errors/validation-err');

const {
  noCard,
  forbidden,
  wrongId,
} = require('../constants/constants.js');

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({ owner: req.user._id });
    res.send({ data: articles });
  } catch (err) {
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  try {
    try {
      const {
        keyword, title, text, date, source, link, image,
      } = req.body;
      const article = await Article.create({
        keyword, title, text, date, source, link, image, owner: req.user._id,
      });

      res.status(201).send({ data: article.omitPrivate() });
    } catch (err) {
      if (err.name === 'ValidationError') {
        throw new ValidationError(err.message);
      } else {
        throw new Error();
      }
    }
  } catch (err) {
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    try {
      const article = await Article.findById(req.params.articleId).select('+owner')
        .orFail(() => {
          throw new NotFoundError(noCard);
        });
      if (article.owner.toString() === req.user._id) {
        const removedArticle = await article.remove();
        res.send({ data: removedArticle.omitPrivate() });
      } else {
        throw new ForbiddenError(forbidden);
      }
    } catch (err) {
      if (err.name === 'CastError') {
        throw new СastError(wrongId);
      } else {
        next(err);
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getArticles, createArticle, deleteArticle,
};
