const projects = require('../../models/projects.model');

function getAllProjects(req, res) {
  res.status(200).json(projects);
}

function getProject(req, res) {
  const id = Number(req.params.id);
  const project = projects[id];
  if (project) {
    res.status(200).json(project);
  } else {
    res.json.status(404).json({
      error: 'Request does not found',
    });
  }
}

function postProject(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'there is no value',
    });
  }
  const newProject = {
    id: projects.length,
    name: req.body.name,
    imagePath: req.body.imagePath,
  };
  projects.push(newProject);
  res.json(newProject);
}
module.exports = {
  getAllProjects,
  getProject,
  postProject,
};
