const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  duration: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});
const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
