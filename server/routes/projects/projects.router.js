const express = require('express');

const {
  getAllProjects,
  getProject,
  postProject,
  uploadImage,
} = require('./projects.controller');
const projectsRouter = express();

projectsRouter.route('/').get(getAllProjects).post(uploadImage, postProject);
projectsRouter.get('/:slug', getProject);

module.exports = projectsRouter;
