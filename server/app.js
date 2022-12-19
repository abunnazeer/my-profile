const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const projectsRouter = require('./routes/projects/projects.router');
const clientsRouter = require('./routes/clients/clients.router');
const experiencesRouter = require('./routes/experiences/experiences.router');
const skillsRouter = require('./routes/skills/skills.router');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

//app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.use('/projects', projectsRouter);
app.use('/clients', clientsRouter);
app.use('/experiences', experiencesRouter);
app.use('/skills', skillsRouter);
module.exports = app;
