const clients = require('../../models/clients.model');

function getAllClients(req, res) {
  res.status(200).json(clients);
}

function getClient(req, res) {
  const id = Number(req.params.id);
  const client = clients[id];
  if (client) {
    res.status(200).json(client);
  } else {
    res.status(400).json({
      error: 'no client record found',
    });
  }
}

function postClient(req, res) {
  if (!req.body.imagePath) {
    return res.status(404).json({
      error: 'you cannot submit without value',
    });
  }
  const newClient = {
    id: clients.length,
    imagePath: req.body.imagePath,
  };
  clients.push(newClient);
  res.json(newClient);
}

module.exports = {
  getAllClients,
  getClient,
  postClient,
};
