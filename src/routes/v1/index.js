const express = require('express');
const validateTimestamp = require('../../middlewares/validateTimeStamp');
const articleController = require('../../controller/articleController');



const v1Router = express.Router();

v1Router.get('/:date', validateTimestamp, articleController.getArticlesByTimestamp);

module.exports = v1Router;