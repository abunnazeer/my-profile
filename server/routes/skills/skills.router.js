const express = require('express');
const { getAllSkills, getSkill, postSkill } = require('./skills.controller');
const skillsRouter = express();

skillsRouter.route('/').get(getAllSkills).post(postSkill);
skillsRouter.get('/:id', getSkill);

module.exports = skillsRouter;
