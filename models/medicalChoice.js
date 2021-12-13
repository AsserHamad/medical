const mongoose = require('mongoose');

const medicalChoiceSchema = new mongoose.Schema(
    {
        emp: {
            type: Number,
            required: true
        },
        choice: {
            type: Number,
            required: true
        }
    },
    {timestamps: true}
);

const medicalModel = mongoose.model('MedicalChoice', medicalChoiceSchema);

module.exports = medicalModel;