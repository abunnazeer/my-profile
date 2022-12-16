const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  github: {
    type: String,
  },
  demo: {
    type: String,
  },
  node: {
    type: String,
  },
  react: {
    type: String,
  },
  express: {
    type: String,
  },
});
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
