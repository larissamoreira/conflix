const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {type: Schema.Types.ObjectId, ref: 'Director'},
    actors: [{type: Schema.Types.ObjectId, ref: 'Applicant'}]
})

module.exports = mongoose.model('Movie', MovieSchema);