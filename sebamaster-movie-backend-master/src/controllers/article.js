"use strict";

const ArticleModel = require('../models/article');


const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ArticleModel.create(req.body)
        .then(article => res.status(201).json(article))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    ArticleModel.findById(req.params.id).exec()
        .then(article => {

            if (!article) return res.status(404).json({
                error: 'Not Found',
                message: `Article not found`
            });

            res.status(200).json(article)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    ArticleModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(article => res.status(200).json(article))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    ArticleModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Article with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list  = (req, res) => {
    ArticleModel.find({}).exec()
        .then(article => res.status(200).json(article))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



module.exports = {
    create,
    read,
    update,
    remove,
    list
};