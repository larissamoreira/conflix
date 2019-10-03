const mongoose = require('mongoose');
const Director = mongoose.model('Director');
const Movie = mongoose.model('Movie');

module.exports = {
    async index(req, res) {
        let movies = []
        if ('id' in req.params) {
            movies = await Movie.find({director: req.params.id})
        } else {
            movies = await Movie.find()
        }
        return res.json(movies);
    },

    async save(req, res) {
        const director = await Director.findById(req.body.director);
        const new_movie = await Movie.create(req.body);
        director.movies.push(new_movie);
        director.save();
        return res.json(new_movie);
    },

    async show(req, res) {
        const movie = await Movie.findById(req.params.id)
        return res.json(movie);
    },

    async update(req, res) {
        const movie = await Movie.findById(req.params.id)
        let new_actor = req.body.actors
        let exists = movie.actors.some(actor => actor._id == new_actor._id)
        if (!exists) {
            movie.actors.push(req.body.actors)
            movie.save()
        }
        return res.json(movie)
    },

    async delete(req, res) {
        await Movie.findByIdAndRemove(req.params.id)
        return res.send('');
    }
}