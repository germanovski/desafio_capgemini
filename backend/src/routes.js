const express = require('express');

const AnunciosController = require('./controllers/AnunciosController');
const ClientesController = require('./controllers/ClientesController');
const RelatorioController = require('./controllers/RelatorioController');

const routes = express.Router();

routes.get('/anuncios', AnunciosController.index);
routes.post('/anuncios', AnunciosController.create);

routes.get('/clientes', ClientesController.index);

routes.get('/relatorio/:cliente_id', RelatorioController.index);

module.exports = routes;