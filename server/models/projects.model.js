const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  imagepath: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    unique: true,
  },
  demo: {
    type: String,
    unique: true,
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
  slug: {
    type: String,
  },
});
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
