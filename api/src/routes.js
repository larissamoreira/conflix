const express = require('express');
const routes = express.Router();

const ApplicantController = require('./controllers/ApplicantController');
const MovieController = require('./controllers/MovieController');
const DirectorController = require('./controllers/DirectorController');

routes.get('/applicants', ApplicantController.index);
routes.post('/applicants', ApplicantController.save);
routes.get('/applicants/:id', ApplicantController.show);
routes.put('/applicants/:id', ApplicantController.update);
routes.delete('/applicants/:id', ApplicantController.delete);


routes.get('/movies', MovieController.index);
routes.post('/movies', MovieController.save);
routes.get('/movies/:id', MovieController.show);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.delete);


routes.get('/directors', DirectorController.index);
routes.post('/directors', DirectorController.save);
routes.get('/directors/:id', DirectorController.show);
routes.put('/directors/:id', DirectorController.update);
routes.delete('/directors/:id', DirectorController.delete);

module.exports = routes;