const MedicalChoice = require('../models/medicalChoice');

exports.previousChoice = (req, res, next) => {
    const {ibsNo} = req.body;
    MedicalChoice.findOne({emp: ibsNo})
    .then(choice => {
        res.json(choice);
    })
    .catch(err => next(err));
}

exports.setNewChoice = (req, res, next) => {
    const {ibsNo : emp, choice} = req.body;
    if(!choice)
        return next({message: 'No choice selected', status: 406})
    MedicalChoice.findOneAndUpdate({emp}, {$set: {emp, choice}}, {upsert: true, new: true})
    .then(() => {
        res.json({ok: true});
    })
    .catch(err => next(err));
}