const express = require('express');
const routes = express.Router();

const ApplicantController = require('./controllers/ApplicantController');

routes.get('/applicants', ApplicantController.index);
routes.post('/applicants', ApplicantController.save);
routes.get('/applicants/:id', ApplicantController.show);
routes.put('/applicants/:id', ApplicantController.update);
routes.delete('/applicants/:id', ApplicantController.delete);

module.exports = routes;