const Clients = require('../../models/clients.model');

async function getAllClients(req, res) {
  const allClients = await Clients.find();
  res.status(200).json(allClients);
}

function getClient(req, res) {
  const id = Number(req.params.id);
  const client = Clients[id];
  if (client) {
    res.status(200).json(client);
  } else {
    res.status(400).json({
      error: 'no client record found',
    });
  }
}

async function postClient(req, res) {
  try {
    const newClient = await Clients.create({
      logo: req.body.logo,
      clientName: req.body.clientName,
      clientWebUrl: req.body.clientWebUrl,
    });
    res.status(201).json({
      status: 'success',
      data: {
        client: newClient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}

module.exports = {
  getAllClients,
  getClient,
  postClient,
};
