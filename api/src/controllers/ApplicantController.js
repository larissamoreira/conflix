const mongoose = require('mongoose');

const Applicant = mongoose.model('Applicant');

module.exports = {
    async index(req, res) {
        const applicants = await Applicant.find();
        return res.json(applicants);
    },

    async save(req, res) {
        const applicant = await Applicant.create(req.body);
        return res.json(applicant);
    },

    async show(req, res) {
        const applicant = await Applicant.findById(req.params.id)
        return res.json(applicant);
    },

    async update(req, res) {
        const applicant = await Applicant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        return res.json(applicant)
    },

    async delete(req, res) {
        await Applicant.findByIdAndRemove(req.params.id)
        return res.send('');
    }
}