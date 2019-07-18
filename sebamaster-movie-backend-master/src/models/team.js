"use strict";

const mongoose = require('mongoose');

// Define the article schema

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const TeamSchema  = new mongoose.Schema({
    team_name: String,
    game: String,
    wins: Number,
    losses: Number,
},
    {collection : 'team'});

TeamSchema.set('versionKey', false);
TeamSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Team', TeamSchema);