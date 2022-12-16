const multer = require('multer');
const Projects = require('../../models/projects.model');

/// Image upload functinalities
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/');
  },
  // destination: 'public/assets/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '__' + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
});

const uploadImage = upload.single('imagePath');
async function getAllProjects(req, res) {
  const allProjects = await Projects.find();
  res.status(200).json(allProjects);
}

function getProject(req, res) {
  const id = Number(req.params.id);
  const project = Projects[id];
  if (project) {
    res.status(200).json(project);
  } else {
    res.json.status(404).json({
      error: 'Request does not found',
    });
  }
}

async function postProject(req, res) {
  try {
    const newProject = await Projects.create({
      title: req.body.title,
      imagePath: req.body.imagePath,
      github: req.body.github,
      demo: req.body.demo,
      node: req.body.node,
      react: req.body.react,
      express: req.body.express,
    });
    res.status(201).json({
      status: 'success',
      data: {
        project: newProject,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}
module.exports = {
  getAllProjects,
  getProject,
  postProject,
  uploadImage,
};
