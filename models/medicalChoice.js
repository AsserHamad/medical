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
        },
        info: {
            empType: Number,
            adminName: String,
            adminAddress: String,
            district: String,
            governate: String,
            floor: String,
            manager: String,
            central: String
        }
    },
    {timestamps: true}
);

const medicalModel = mongoose.model('MedicalChoice', medicalChoiceSchema);

module.exports = medicalModel;