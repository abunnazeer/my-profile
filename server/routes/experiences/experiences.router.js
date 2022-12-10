const express = require('express');
const {
  getAllExperiences,
  postExperience,
  getExperience,
} = require('./experiences.controller');

const experiencesRouter = express();
experiencesRouter.route('/').get(getAllExperiences).post(postExperience);
experiencesRouter.get('/:id', getExperience);

module.exports = experiencesRouter;
