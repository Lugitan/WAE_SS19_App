"use strict";

const mongoose = require('mongoose');

// Define the article schema

const ArticleSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    date: Date,
    sponsored: Boolean,
},
    {collection : 'article'});

ArticleSchema.set('versionKey', false);
ArticleSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Article', ArticleSchema);