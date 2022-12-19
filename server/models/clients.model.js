const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
    unique: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientWebUrl: {
    type: String,
    required: true,
  },
});
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
