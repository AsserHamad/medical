const MedicalChoice = require('../models/medicalChoice');

exports.previousChoice = (req, res, next) => {
    const {emp} = req.body;
    MedicalChoice.findOne({emp})
    .then(choice => {
        res.json(choice);
    })
    .catch(err => next(err));
}

exports.setNewChoice = (req, res, next) => {
    const {emp, choice} = req.body;
    console.log(req.body);
    if(!choice)
        return next({message: 'No choice selected', status: 406})
    MedicalChoice.findOneAndUpdate({emp}, {$set: req.body}, {upsert: true, new: true})
    .then(() => {
        res.json({ok: true});
    })
    .catch(err => next(err));
}