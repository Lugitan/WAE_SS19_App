"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const TeamController = require('../controllers/team');


router.get('/', TeamController.list); // List all movies
router.post('/', middlewares.checkAuthentication, TeamController.create); // Create a new article
router.get('/:id', TeamController.read); // Read a movie by Id
router.get('/search/:team_name', TeamController.search); // Read a movie by name
router.put('/:id', middlewares.checkAuthentication, TeamController.update); // Update a article by Id
router.delete('/:id', middlewares.checkAuthentication, TeamController.remove); // Delete a article by Id



module.exports = router;