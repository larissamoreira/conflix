const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String, enum: ["Male", "Female"]
    },
    parentsname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    experience: {
        type: String
    },
    specialskills: {
        type: String
    },
    interests: [String]
})

mongoose.model('Applicant', ApplicantSchema);