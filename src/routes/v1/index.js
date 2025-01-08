const express = require('express');
const articleController = require('../../controller/articleController');
const BrandController = require('../../controller/brandController');

const v1Router = express.Router();

v1Router.get('/brands', BrandController.getUniqueBrands);
v1Router.get('/:date', articleController.getArticlesByTimestamp);

module.exports = v1Router;