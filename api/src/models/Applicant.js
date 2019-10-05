const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const ApplicantSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String, enum: ["Male", "Female", "Other"]
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
    interests: [Object],
    movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}]
})

ApplicantSchema.plugin(mongoosePaginate);

mongoose.model('Applicant', ApplicantSchema);