"use strict";

const TeamModel = require('../models/team');


const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    TeamModel.create(req.body)
        .then(team => res.status(201).json(team))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    TeamModel.findById(req.params.id).exec()
        .then(team => {

            if (!team) return res.status(404).json({
                error: 'Not Found',
                message: `Team not found`
            });

            res.status(200).json(team)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};


//search by team name
const search   = (req, res) => {
    TeamModel.find({team_name: req.params.team_name}).exec()
        .then(team => {
            if (!team.length) return res.status(404).json({
                error: 'Not Found',
                message: `Team not found`
             });

            res.status(200).json(team)
            console.log(team);
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

    TeamModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(team => res.status(200).json(team))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    TeamModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Team with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
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
    create,
    read,
    search,
    update,
    remove,
    list
};