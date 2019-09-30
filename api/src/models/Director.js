const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}]
})

module.exports = mongoose.model('Director', DirectorSchema);