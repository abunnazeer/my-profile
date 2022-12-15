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
  if (!req.body.title) {
    return res.status(400).json({
      error: 'there is no value',
    });
  }
  const newProject = {
    id: projects.length,
    title: req.body.title,
    imagePath: req.body.imagePath,
    github: req.body.github,
    demo: req.body.demo,
    express: req.body.express,
    node: req.body.node,
    react: req.body.react,
  };
  projects.push(newProject);
  res.json(newProject);
}
module.exports = {
  getAllProjects,
  getProject,
  postProject,
};
