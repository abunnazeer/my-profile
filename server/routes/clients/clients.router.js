const express = require('express');

const {
  getAllClients,
  getClient,
  postClient,
} = require('./clients.controller');

const clientRouter = express();

clientRouter.route('/').get(getAllClients).post(postClient);
clientRouter.get('/:id', getClient);

module.exports = clientRouter;
