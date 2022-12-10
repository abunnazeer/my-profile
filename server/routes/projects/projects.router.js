const express = require('express');
const {
  getAllProjects,
  getProject,
  postProject,
} = require('./projects.controller');
const projectsRouter = express();

projectsRouter.route('/').get(getAllProjects).post(postProject);
projectsRouter.get('/:id', getProject);

module.exports = projectsRouter;
