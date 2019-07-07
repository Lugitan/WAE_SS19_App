"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const ArticleController = require('../controllers/article');


router.get('/', ArticleController.list); // List all movies
router.post('/', middlewares.checkAuthentication, ArticleController.create); // Create a new article
router.get('/:id', ArticleController.read); // Read a movie by Id
router.put('/:id', middlewares.checkAuthentication, ArticleController.update); // Update a article by Id
router.delete('/:id', middlewares.checkAuthentication, ArticleController.remove); // Delete a article by Id


module.exports = router;