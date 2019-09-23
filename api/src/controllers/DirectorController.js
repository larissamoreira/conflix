const mongoose = require('mongoose');

const Director = mongoose.model('Director');

module.exports = {
    async index(req, res) {
        const directors = await Director.find();
        return res.json(directors);
    },

    async save(req, res) {
        const director = await Director.create(req.body);
        return res.json(director);
    },

    async show(req, res) {
        const director = await Director.findById(req.params.id)
        return res.json(director);
    },

    async update(req, res) {
        const director = await Director.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        return res.json(director)
    },

    async delete(req, res) {
        await Director.findByIdAndRemove(req.params.id)
        return res.send('');
    }
}