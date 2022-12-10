const express = require('express');
const cors = require('cors');

const projectsRouter = require('./routes/projects/projects.router');
const clientsRouter = require('./routes/clients/clients.router');
const experiencesRouter = require('./routes/experiences/experiences.router');
const skillsRouter = require('./routes/skills/skills.router');

const app = express();
app.use(
  cors({
    origin: 'http://127.0.0.1:3000',
  })
);
app.use(express.json());

app.use('/projects', projectsRouter);
app.use('/clients', clientsRouter);
app.use('/experiences', experiencesRouter);
app.use('/skills', skillsRouter);
module.exports = app;
