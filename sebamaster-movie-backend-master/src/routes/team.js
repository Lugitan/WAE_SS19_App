"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const TeamController = require('../controllers/team');


router.get('/', TeamController.list); // List all movies
router.get('/:id', TeamController.read); // Read a movie by Id



module.exports = router;