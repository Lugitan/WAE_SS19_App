"use strict";

const TeamModel = require('../models/team');

const read   = (req, res) => {
    TeamModel.findById(req.params.id).exec()
        .then(team => {

            if (!team) return res.status(404).json({
                error: 'Not Found',
                message: `Team not found`
            });

            res.status(200).json(article)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const list  = (req, res) => {
    TeamModel.find({}).exec()
        .then(team => res.status(200).json(team))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



module.exports = {
    read,
    list
};